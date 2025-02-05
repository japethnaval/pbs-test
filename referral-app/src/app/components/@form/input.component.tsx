import React, { memo } from 'react'
import { get, useFormContext } from 'react-hook-form'


interface InputProps {
  name: string
  type: string
  label: string
  placeholder: string
  as?: 'input' | 'textarea'
  value?: string | number
}

export const Input = ({
  name,
  type,
  label,
  placeholder,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors, defaultValues },
  } = useFormContext()
  const {
    onChange,
    onBlur,
    name: inputName,
    ref,
  } = register(name!, { value: props.value, valueAsNumber: type === 'number' })

  const isInvalid = !!get(errors, name)

  return (
    <div className="flex w-full">
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-400 mb-1">
          {label}
        </label>
        <input
          className={`w-full h-12 p-3 text-base border ${isInvalid ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none`}
          placeholder={placeholder}
          name={inputName}
          onBlur={onBlur}
          onChange={onChange}
          type={type}
          defaultValue={get(defaultValues, name)}
          ref={ref}
          {...props}
        />

        {get(errors, name) && (
          <p className="text-red-500 text-sm mt-1">
            {get(errors, name)?.message || 'This field is required'}
          </p>
        )}
      </div>
    </div>
  )
}

export default memo(Input)
