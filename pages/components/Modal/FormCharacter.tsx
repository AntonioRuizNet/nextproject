import { useState } from "react";
import { useForm } from "react-hook-form";

export function FormCharacter() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <form onSubmit={handleSubmit((data: any) => setData(JSON.stringify(data)))}>
            <input className="form-control mb-4" {...register("name")} placeholder="Nombre" />
            <textarea className="form-control" {...register("description")} placeholder="Descripcion" />
            <p className="pt-4">{data ? `Respuesta para el servidor: ${data}` : ''}</p>
            <input className="btn btn-info form-control" type="submit" />
        </form>
    );
}