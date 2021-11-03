interface IValidation {
    [key: string]: {
        required?: {
            value: boolean,
            message: string,
        }
    },
}

interface IData {
    [key: string]: string,
}

interface IError {
    [key: string]: string,
}

//* Правила
const validations: IValidation = {
    name: {
        required: {
            value: true,
            message: 'Поле обязательно для заполнения',
        },
    },
    number: {
        required: {
            value: true,
            message: 'Поле обязательно для заполнения',
        },
    },
}

function Validation (data: IData) {
    const errors: IError = {};
    let isValid = true;

    Object.keys(validations).forEach((key: string) => {
        const value = data[key];
        const validation = validations[key];
        if (validation?.required?.value && !value) {
            isValid = false;
            errors[key] = validation?.required?.message;
        }
    })
    return { isValid, errors }
}

export default Validation;
