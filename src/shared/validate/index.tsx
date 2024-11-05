import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('Введите корректный email').required('Email обязателен'),
  password: yup
    .string()
    .min(8, 'Минимум 8 символов')
    .max(32, 'Максимум 32 символа')
    .required('Пароль обязателен'),
});
