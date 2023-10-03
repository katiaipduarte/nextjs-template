'use client'

import { useForm } from 'react-hook-form'

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = (data: unknown) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor='name'>Name</label>

			{/* use aria-invalid to indicate field contain error */}
			<input
				aria-invalid={errors.name ? 'true' : 'false'}
				id='name'
				{...register('name', { required: true, maxLength: 30 })}
			/>

			{/* use role="alert" to announce the error message */}
			{errors.name && errors.name.type === 'required' ? (
				<span role='alert'>This is required</span>
			) : null}
			{errors.name && errors.name.type === 'maxLength' ? (
				<span role='alert'>Max length exceeded</span>
			) : null}

			<input type='submit' />
		</form>
	)
}

export default Form
