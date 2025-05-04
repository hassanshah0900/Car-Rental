interface CarDetails {
  model: string;
  mark: string;
  year: number;
  ac: boolean;
  transmission: string;
  fuel: string;
  doors: number;
}
interface Props {
  carDetails: CarDetails;
  rent: number;
}
function CarDetailsTable({ carDetails: details, rent }: Props) {
  const CAR_DATA = [
    { attribute: "Model", value: details.model },
    { attribute: "Mark", value: details.mark },
    { attribute: "Year", value: details.year },
    { attribute: "Doors", value: details.doors },
    { attribute: "AC", value: details.ac },
    { attribute: "Transmission", value: details.transmission },
    { attribute: "Fuel", value: details.fuel },
  ];
  return (
    <div>
      <p className="w-full bg-primary py-2 px-4 text-white text-lg">
        <span className="text-2xl font-bold">${rent}</span> / rent per day
      </p>
      <table className="w-full">
        <tbody>
          {CAR_DATA.map((data, index) => (
            <tr key={index} className="text-primary-text text-sm text-center">
              <td className="border border-secondary-text p-2 w-1/2">
                {data.attribute}
              </td>
              <td className="border border-secondary-text p-2 w-1/2">
                {typeof data.value === "boolean" ? data.value ? "Yes" : "No" : data.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarDetailsTable;
