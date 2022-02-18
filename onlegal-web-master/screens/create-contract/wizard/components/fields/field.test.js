import React from 'react';
import { render, screen } from '@testing-library/react';
import Field from "./field";
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from 'styled-components';
import theme from '../../../../../shared/theme';

describe('field', () =>{

    describe('input field', () => {
        const inputTextProps = {
            name: 'field_test',
            label: 'Text type',
            type: 'TEXT',
            register: jest.fn(),
            errors: {},
            required: true,
            validationRules: {
                maxLength: {value: 200, message: "La longitud máxima es de 200 caracteres"},
                minLength: {value: 5, message: "La longitud mínima es de 5 caracteres"},
                required: "Este campo es requerido"
            }
        };

        test('should render an input if type is "TEXT"', () => {
            const { container } = render(<Field {...inputTextProps}/>);
            
            const element = container.querySelector('[name=field_test]');
            expect(element).toBeInstanceOf(HTMLInputElement);
            expect(element.type).toBe('text');
        });

        test('should render an input if type is "NUMBER"', () => {
            const inputNumberProps = {
                name: 'field_test',
                label: 'Number type',
                type: 'NUMBER',
                register: jest.fn(),
                errors: {},
                required: true,
                validationRules: {
                    min: {
                        message: "El valor debe ser mayor a 1",
                        value: 1
                    },
                    required: "Este campo es requerido"
                }
            };

            const {container} = render(<Field {...inputNumberProps}/>);
            
            const element = container.querySelector('[name=field_test]');
            expect(element).toBeInstanceOf(HTMLInputElement);
            expect(element.type).toBe('number');
        });

        test('should render an input if type is "EMAIL"', () => {
            const inputEmailProps = {
                name: 'field_test',
                label: 'Email type',
                type: 'EMAIL',
                register: jest.fn(),
                errors: {},
                required: true,
                validationRules: {
                    required: "Este campo es requerido"
                }
            };

            const {container} = render(<Field {...inputEmailProps}/>);
            
            const element = container.querySelector('[name=field_test]');
            expect(element).toBeInstanceOf(HTMLInputElement);
            expect(element.type).toBe('email');
        });

        test('should display an error message if there is an error for the field', () => {
            const errorProps = {
                ...inputTextProps, 
                errors: {
                    field_test: {type: "required", message: "Este campo es requerido"}
                }
            };

            const { getByText } = render(<Field {...errorProps}/>);
            expect(getByText('Este campo es requerido')).toBeInTheDocument();
        });
    });

    describe('date field', () => {
        const controlMock = {
            register: jest.fn(),
            unregister: jest.fn(),
            reValidateMode: {isReValidateOnBlur: false, isReValidateOnChange: true} ,
            fieldsRef:{
                current: {
                    fecha_de_celebracion:{}
                }
            },
            defaultValuesRef: {current: {}},
            fieldArrayDefaultValuesRef: {current: {}},
            fieldArrayNamesRef: {current: []},
            fieldsWithValidationRef: {current: {}},
            formStateRef: {current: {}},
            isWatchAllRef: {current: false},
            readFormStateRef: {current: {}},
            resetFieldArrayFunctionRef: {current: {}},
            shallowFieldsStateRef: {current: {}},
        };

        const dateProps = {
            name: 'field_test',
            label: 'Date field',
            defaultValue: "2021-02-07",
            type: 'DATE',
            setValue: jest.fn(),
            control: controlMock,
            onBlur: jest.fn(),
            errors: {},
            required: true,
            validationRules: {
                min: {
                    message: "El valor debe ser mayor a 1",
                    value: 1
                },
                required: "Este campo es requerido"
            }
        };

        test('should render a date field if type is "DATE"', () => {
           render(<Field {...dateProps}/>);

            const element = screen.getByTestId('date-field')
            expect(element).toBeInstanceOf(HTMLDivElement);
        });

        test('should display an error message if there is an error for the field', () => {
            const errorProps = {
                ...dateProps, 
                errors: {
                    field_test: {type: "required", message: "Este campo es requerido"}
                }
            };

            const { getByText } = render(<Field {...errorProps}/>);
            expect(getByText('Este campo es requerido')).toBeInTheDocument();
        });
    });

    describe('radio button field', () => {
        const radioButtonProps = {
            name: 'field_test',
            label: 'Radio button type',
            type: 'RADIO_BUTTON',
            register: jest.fn(),
            options: [{value: 'ONE', label: 'One'}, {value: 'TWO', label: 'Two'}]
        };

        test('should render an radio if type is "RADIO_BUTTON"', () => {
            const { container } = render(<ThemeProvider theme={theme}><Field {...radioButtonProps}/></ThemeProvider>);
            
            const element = container.querySelector('[name=field_test]');
            expect(element).toBeInstanceOf(HTMLInputElement);
            expect(element.type).toBe('radio');
        });  
    });
    
   

});