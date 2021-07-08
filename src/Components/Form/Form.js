import React from "react";
import { useForm } from "react-hook-form";

import './form.css'

export default function App() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);


    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label for="">ID</label>
            <input type="number" {...register("id", { required: true })} placeholder="Introduce un ID" />
            <span>{errors.id?.type === 'required' && "Por favor introduzca un id"}</span>

            <label for="">Nombre</label>
            <input type="text"{...register("name", { required: true, minLength: 3 })} placeholder="Introduce un Nombre" />
            <span>{errors.name && "Por favor introduzca un nombre, debe contener al menos 3 caracteres"}</span>

            <label for="">Sube una imagen</label>
            <input type="text" {...register("img", { required: true })} placeholder="Sube una imagen" />
            <span>{errors.img?.type === 'required' && "Por favor introduzca un imagen"}</span>

            <label for="">Tipo</label>
            <select {...register("typeOne", { required: true })} >
                <option value="tipo"></option>
                <option value="Normal">Normal</option>
                <option value="Electric">Electric</option>
                <option value="Psychic">Psychic</option>
            </select>
            <span>{errors.typeOne?.type === 'required' && "Por favor seleccione una de las opciones indicadas"}</span>

            <input type="submit" />
        </form>
    );
}