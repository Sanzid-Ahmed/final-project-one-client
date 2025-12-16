import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  //   const regions = new Set(regionsDuplicate);
  const regions = [...new Set(regionsDuplicate)];

  // const senderRegion = watch('senderRegion');
  const riderRegion = useWatch({ control, name: "riderRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleBeARiderApplication = (data) => {
    console.log(data);
    axiosSecure.post('/riders', data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your applycation has been submited",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl text-primary">Be a Rider</h2>
      <form
        onSubmit={handleSubmit(handleBeARiderApplication)}
        className="mt-12 p-4 text-black"
      >
        {/* Two column */}
        <div className="grid grid-col-1 md:grid-cols-2 gap-12">
          {/* sender details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Rider Details</h4>

            {/* sender name */}
            <label className="label">Rider Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              {...register("riderName")}
              className="input w-full"
              placeholder="Sender Name"
            />

            {/* sender email */}
            <label className="label">Rider Email</label>
            <input
              type="text"
              defaultValue={user?.email}
              {...register("riderEmail")}
              className="input w-full"
              placeholder="Sender Email"
            />

            {/* sender address */}
            <label className="label mt-4">Rider Address</label>
            <input
              type="text"
              {...register("riderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />

            {/* sender region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Rider Regions</legend>
              <select
                {...register("riderRegion")}
                defaultValue="Pick a region"
                className="select"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* sender districts */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Rider Districts</legend>
              <select
                {...register("riderDistrict")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a district</option>
                {districtsByRegion(riderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
          </fieldset>

          {/* receiver details*/}

          <fieldset className="fieldset">
            <h1 className="text-2xl font-semibold">More Details</h1>

            {/* receiver name */}
            <label className="label">Driving License</label>
            <input
              type="text"
              {...register("license")}
              className="input w-full"
              placeholder="Driving License"
            />

            {/* receiver email */}
            <label className="label">NID</label>
            <input
              type="text"
              {...register("nid")}
              className="input w-full"
              placeholder="NID"
            />

            {/* receiver address */}
            <label className="label mt-4">BIKE</label>
            <input
              type="text"
              {...register("bike")}
              className="input w-full"
              placeholder="bike"
            />
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="Apply as a Rider"
        />
      </form>
    </div>
  );
};

export default Rider;
