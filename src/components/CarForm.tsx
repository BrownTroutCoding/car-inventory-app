import Input from "./Input";
import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useDispatch, useStore } from 'react-redux';
import { chooseVin, chooseMake, chooseModel, chooseYear, chooseColor } from "../redux/slices/RootSlice"

// interfaces
interface CarFormProps {
  id?: string

}

const CarForm = (props:CarFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();


  // function that handles form submission for adding or updating a car record.
  const onSubmit = (data: any, event: any) => {
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(`Updated: ${data.vin} ${props.id}`);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      event?.target.reset();
    } else {
      const newCar = {
        vin: data.vin,
        make: data.make,
        model: data.model,
        year: data.year,
        color: data.color
      };
      server_calls.create(newCar);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
  

  return (

    
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input {...register('vin')} name='vin' placeholder="VIN Number"/>
        </div>
        <div>
          <Input {...register('make')} name='make' placeholder="Make"/>
        </div>
        <div>
          <Input {...register('model')} name='model' placeholder="Model"/>
        </div>
        <div>
          <Input {...register('year')} name='year' placeholder="Year"/>
        </div>
        <div>
          <Input {...register('color')} name='color' placeholder="Color"/>
        </div>
        <div className="flex p-1">
          <button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CarForm
