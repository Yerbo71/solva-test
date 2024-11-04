import { TextField, Button, CircularProgress } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../../features/auth/authSlice';
import { mockUsers } from '../../../shared/mock';
import { useNavigate } from 'react-router-dom';
import { schema } from '../../../shared/validate';
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmitHandler = async (data) => {
    dispatch(loginStart());
    const user = mockUsers.find(
      (user) => user.email === data.email && user.password === data.password,
    );
    if (user) {
      dispatch(loginSuccess({ email: user.email }));
      reset();
      navigate('/');
    } else {
      dispatch(loginFailure());
      alert('Неверный email или пароль');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField
          id="outlined-email"
          label="Электронная почта"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          autoComplete="email"
          {...register('email')}
          helperText={errors.email?.message}
          error={!!errors.email && !!touchedFields.email}
        />
        <TextField
          id="outlined-password"
          label="Пароль"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          autoComplete="password"
          {...register('password')}
          helperText={errors.password?.message}
          error={!!errors.password && !!touchedFields.password}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!isValid || loading}
          sx={{ marginTop: 2 }}
          size="large"
        >
          {loading ? <CircularProgress size={24} /> : 'Вход'}
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
