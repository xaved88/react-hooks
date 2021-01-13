export type FormValidationMethodType<T> = (value: T) => boolean | string;

export class FormValidators {
    static StringMinLength(min: number, message: string = 'Too short'): FormValidationMethodType<string> {
        return (value) => {
            return value.length < min ? message : '';
        }
    }

    static StringMaxLength(max: number, message: string = 'Too long'): FormValidationMethodType<string> {
        return (value) => {
            return value.length > max ? message : '';
        }
    }

    static NumberLessThan(limit: number, message: string = 'Too large'): FormValidationMethodType<number> {
        return (value) => {
            return value >= limit ? message : '';
        }
    }

    static NumberGreaterThan(limit: number, message: string = 'Too small'): FormValidationMethodType<number> {
        return (value) => {
            return value <= limit ? message : '';
        }
    }

    static ValueEquals(expected: any, message: string = 'Not equals'): FormValidationMethodType<any> {
        return (value) => {
            return value !== expected ? message : '';
        }
    }
}
