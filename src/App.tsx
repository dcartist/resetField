import * as React from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";
import "./styles.css";

let renderCount = 0;

export default function App() {
  const {
    register,
    resetField,
    formState: { isDirty, isValid }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      secondName: ""
    }
  });
  const handleClick = () => resetField("firstName");
  renderCount++;

  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />

      <form>
        <input {...register("firstName", { required: true })} />
        <input {...register("secondName", { required: true })} />

        <p>{isDirty && "dirty"}</p>
        <p>{isValid && "valid"}</p>

        <button type="button" onClick={handleClick}>
          Reset
        </button>
      </form>
    </div>
  );
}
