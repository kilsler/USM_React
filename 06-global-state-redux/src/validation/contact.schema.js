import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string('Name should be a String').required('Name is required'),
    description: yup.string('Description should be a String')
        .test('len', 'Must be longer than 5 characters', val => val.toString().length > 5)
        .required('Description is required'),
    price: yup.number('Price should be a Number')
        .typeError('Price should be a Number')
        .positive('Price should be a positive number')
        .min(0, 'Price should be greater than 0')
        .max(1000, 'Price should be less than 1000')
        .required('Price is required'),
    image: yup.string('Image name should be a String')
        .test('len', 'Must be longer than 5 characters', val => val.toString().length > 4)
        .required('Image is required'),
}).required();

export default schema;