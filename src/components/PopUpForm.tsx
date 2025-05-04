import { yupResolver } from "@hookform/resolvers/yup";
import { MapPin, X } from "lucide-react";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { cars } from "../data/cars";
import { formatDate } from "../utils/formatDate";
import Button from "./Button";
import Container from "./Container";
import FormControl from "./FormControl";

const REQUIRED_MSG = "This field is required";
const formSchema = yup.object({
  firstName: yup.string().required(REQUIRED_MSG),
  lastName: yup.string().required(REQUIRED_MSG),
  phone: yup.string().required(REQUIRED_MSG),
  age: yup
    .number()
    .required(REQUIRED_MSG)
    .min(18)
    .max(100)
    .typeError(REQUIRED_MSG),
  email: yup.string().required(REQUIRED_MSG),
  address: yup.string().required(REQUIRED_MSG),
  city: yup.string().required(REQUIRED_MSG),
  zipCode: yup.string().required(REQUIRED_MSG).max(6),
  notifyWithUpdates: yup.boolean(),
});

type FormSchema = yup.InferType<typeof formSchema>;

interface Props {
  carId: number;
  pickUpLocation: string;
  dropOffLocaton: string;
  pickUpDate: Date;
  dropOffDate: Date;
  closeForm: () => void;
  onFormSubmission: () => void;
}
const PopUpForm = forwardRef<HTMLDialogElement, Props>(function (
  {
    carId,
    dropOffDate,
    dropOffLocaton,
    pickUpDate,
    pickUpLocation,
    closeForm,
    onFormSubmission,
  },
  ref
) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: yupResolver(formSchema),
  });

  const selectedCar = cars.find((car) => car.id === carId);
  return (
    <dialog
      className="max-w-[700px]"
      onClick={(e) => {
        const formDimensions = e.currentTarget.getBoundingClientRect();
        if (
          e.clientX < formDimensions.left ||
          e.clientX > formDimensions.right ||
          e.clientY < formDimensions.top ||
          e.clientY > formDimensions.bottom
        )
          closeForm();
      }}
      ref={ref}
    >
      <div className="flex justify-between items-center bg-primary p-5 text-white">
        <h3 className="text-xl font-bold">COMPLETE RESERVATION</h3>
        <X className="cursor-pointer" onClick={closeForm} />
      </div>
      <Container className="grid md:grid-cols-2 gap-8 font-bold py-5 border-b border-gray-400 justify-items-center md:justify-items-start text-center md:text-start">
        <div className="space-y-5">
          <p className="text-primary">Location & Date</p>
          <div className="flex">
            <MapPin />
            <div>
              <p className="flex">Pick-Up Date & Time</p>
              <p className="font-normal text-secondary-text">
                {formatDate(pickUpDate)}
                <input
                  className="border border-black ms-2 h-5 outline-none"
                  type="time"
                />
              </p>
            </div>
          </div>
          <div className="flex">
            <MapPin />
            <div>
              <p className="flex">Drop-Off Date & Time</p>
              <p className="font-normal text-secondary-text">
                {formatDate(dropOffDate)}
                <input
                  className="border border-black ms-2 h-5 outline-none"
                  type="time"
                />
              </p>
            </div>
          </div>
          <div className="flex">
            <MapPin />
            <div>
              <p className="flex">Pick-Up Location</p>
              <p className="font-normal text-secondary-text">
                {pickUpLocation}
              </p>
            </div>
          </div>
          <div className="flex">
            <MapPin />
            <div>
              <p className="flex">Drop-Off Location</p>
              <p className="font-normal text-secondary-text">
                {dropOffLocaton}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl">
            Car - <span className="text-primary">{selectedCar?.name}</span>
          </p>
          <img className="mt-5" src={selectedCar?.imgUrl} alt="" />
        </div>
      </Container>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
          closeForm();
          onFormSubmission();
        })}
      >
        <Container className="space-y-5 py-5">
          <h4 className="text-primary font-bold">PERSONAL INFORMATION</h4>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <FormControl
                id="firstName"
                {...register("firstName")}
                autoFocus
                label="First Name"
                type="text"
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <FormControl
                id="lastName"
                {...register("lastName")}
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <FormControl
                id="phone"
                {...register("phone")}
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <FormControl
                id="age"
                {...register("age", { valueAsNumber: true })}
                label="Age"
                type="number"
                placeholder="18"
              />
              {errors.age && (
                <p className="text-sm text-red-600">{errors.age.message}</p>
              )}
            </div>
          </div>
          <div>
            <FormControl
              id="email"
              {...register("email")}
              label="Email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <FormControl
              id="address"
              {...register("address")}
              label="Address"
              type="text"
              placeholder="Enter your street address"
            />
            {errors.address && (
              <p className="text-sm text-red-600">{errors.address.message}</p>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <FormControl
                id="city"
                {...register("city")}
                label="City"
                type="text"
                placeholder="Enter your city"
              />
              {errors.city && (
                <p className="text-sm text-red-600">{errors.city.message}</p>
              )}
            </div>
            <div>
              <FormControl
                id="zipcode"
                {...register("zipCode")}
                label="Zip Code"
                type="text"
                placeholder="Enter your zip code"
              />
              {errors.zipCode && (
                <p className="text-sm text-red-600">{errors.zipCode.message}</p>
              )}
            </div>
          </div>
          <div className="text-black/60 space-x-2">
            <input
              {...register("notifyWithUpdates")}
              type="checkbox"
              id="notifyWithUpdates"
            />
            <label htmlFor="notifyWithUpdates">
              Please send me latest news and updates
            </label>
          </div>
        </Container>
        <div className="p-10 bg-secondary-text/[0.1] flex justify-center">
          <Button className="text-xl" version="primary">
            Reserve Now
          </Button>
        </div>
      </form>
    </dialog>
  );
});

export default PopUpForm;
