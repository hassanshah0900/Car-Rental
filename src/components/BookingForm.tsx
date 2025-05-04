import { yupResolver } from "@hookform/resolvers/yup";
import { Calendar, Car, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { cars } from "../data/cars";
import Button from "./Button";
import Container from "./Container";
import PopUpForm from "./PopUpForm";
const LOCATION = [
  "Rawalpindi",
  "Lahore",
  "Islamabad",
  "Karachi",
  "Peshawar",
] as const;

const REQUIRED_MSG = "This field is required";

const FormSchema = yup.object({
  carType: yup.string().required(REQUIRED_MSG),
  pickUpLocation: yup.string().oneOf(LOCATION, REQUIRED_MSG).defined(),
  dropOffLocation: yup.string().oneOf(LOCATION, REQUIRED_MSG).defined(),
  pickUpDate: yup
    .date()
    .defined()
    .typeError(REQUIRED_MSG)
    .test({
      test: (value) => {
        const today = new Date();
        today.setHours(0, 0, 0);
        if (value) {
          return value > today;
        }
      },
      message: "Pick-up date can't be in the past",
    }),
  dropOffDate: yup
    .date()
    .defined()
    .typeError(REQUIRED_MSG)
    .test(
      "after-pickup",
      "Drop-of date should be greater then pick-up date",
      function (dropOfDate) {
        const pickUpDate: Date = this.parent.pickUpDate;
        if (dropOfDate && pickUpDate) return dropOfDate > pickUpDate;
      }
    ),
});

type FormSchema = yup.InferType<typeof FormSchema>;

function BookingForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [formValues, setFormValues] = useState<FormSchema>({} as FormSchema);
  const [isFormSubmitted, setFormSubmission] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: yupResolver(FormSchema),
  });

  function closeForm() {
    if (dialogRef.current) dialogRef.current.close();
  }

  return (
    <div
      id="booking-form"
      className="bg-gradient-to-b from-transparent via-background -translate-y-16  md:-translate-y-28"
    >
      <Container>
        <Container className="bg-white bg-[url('../../public/backgrounds/wood-bg.png')] p-6 pb-10 rounded shadow-xl md:px-12 md:pt-6 md:pb-16">
          {isFormSubmitted && (
            <p className="text-green-700 mb-3">
              The Form has been Submitted successfully
            </p>
          )}
          <h2 className="text-2xl font-bold mb-6">Book a car</h2>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              dialogRef.current?.showModal();
              setFormValues(data);
            })}
            className="grid grid-cols-1  md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 items-start"
          >
            <div>
              <label className="flex items-center gap-2 font-bold">
                <Car /> Select Your Car Type
                <span className="text-primary">*</span>
              </label>
              <select
                id="carType"
                {...register("carType")}
                className="w-full border border-secondary-text/[0.5] text-secondary-text p-2 mt-3 outline-none text-sm"
              >
                <option value="">Select your car type</option>
                {cars.map((car, index) => (
                  <option key={index} value={car.id}>
                    {car.name}
                  </option>
                ))}
              </select>
              {errors.carType && (
                <p className="text-sm text-red-600">{errors.carType.message}</p>
              )}
            </div>
            <div>
              <label
                id="pickUpLocation"
                className="flex items-center gap-2 font-bold"
              >
                <MapPin />
                Pick-up
                <span className="text-primary">*</span>
              </label>
              <select
                {...register("pickUpLocation")}
                className="w-full border border-secondary-text/[0.5] text-secondary-text p-2 mt-3 outline-none text-sm"
              >
                <option value="">Select your pick up location</option>
                {LOCATION.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              {errors.pickUpLocation && (
                <p className="text-sm text-red-600">
                  {errors.pickUpLocation.message}
                </p>
              )}
            </div>
            <div>
              <label className="flex items-center gap-2 font-bold">
                <MapPin /> Drop-of <span className="text-primary">*</span>
              </label>
              <select
                id="dropOffLocation"
                {...register("dropOffLocation")}
                className="w-full border border-secondary-text/[0.5] text-secondary-text p-2 mt-3 outline-none text-sm"
              >
                <option value="">Select your drop off location</option>
                {LOCATION.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              {errors.dropOffLocation && (
                <p className="text-sm text-red-600">
                  {errors.dropOffLocation.message}
                </p>
              )}
            </div>
            <div>
              <label className="flex items-center gap-2 font-bold">
                <Calendar /> Pick-up <span className="text-primary">*</span>
              </label>
              <input
                id="pickUpDate"
                {...register("pickUpDate", {
                  valueAsDate: true,
                })}
                className="w-full border border-secondary-text/[0.5] text-secondary-text p-2 mt-3 outline-none text-sm"
                type="date"
              />
              {errors.pickUpDate && (
                <p className="text-sm text-red-600">
                  {errors.pickUpDate.message}
                </p>
              )}
            </div>
            <div>
              <label className="flex items-center gap-2 font-bold">
                <Calendar /> Drop-of <span className="text-primary">*</span>
              </label>
              <input
                id="dropOffDate"
                {...register("dropOffDate", {
                  valueAsDate: true,
                })}
                className="w-full border border-secondary-text/[0.5] text-secondary-text p-2 mt-3 outline-none text-sm"
                type="date"
              />
              {errors.dropOffDate && (
                <p className="text-sm text-red-600">
                  {errors.dropOffDate.message}
                </p>
              )}
            </div>
            <Button
              className="self-end"
              size="block"
              version="primary"
              type="submit"
            >
              Search
            </Button>
          </form>
        </Container>
      </Container>
      <PopUpForm
        onFormSubmission={() => {
          setFormSubmission(true);
          reset();
        }}
        closeForm={closeForm}
        ref={dialogRef}
        carId={parseInt(formValues.carType)}
        dropOffDate={formValues.dropOffDate}
        dropOffLocaton={formValues.dropOffLocation}
        pickUpDate={formValues.pickUpDate}
        pickUpLocation={formValues.pickUpLocation}
      />
    </div>
  );
}

export default BookingForm;
