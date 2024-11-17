import { Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"

export const FormProduct = () => {

    const {handleChange,values, resetForm} = useForm(

        {
            nombre:'',
            imagen:'',
            precio: 0
        }
    )
    return (
        <Form className="p-4 border rounded m3">
            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text"
                name="nombre"
                placeholder="Ingrese nombre producto"
                value={values.nombre}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formNombre">
                <Form.Label>Imagen</Form.Label>
                <Form.Control 
                type="text"
                name="imagen"
                placeholder="Ingrese imagen del producto"
                value={values.imagen}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="number"
                name="precio"
                placeholder="Ingrese precio del producto"
                value={values.precio}
                onChange={handleChange}
                />
            </Form.Group>

        </Form>
    )
}
