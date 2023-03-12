import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';

import { LogInFormInput } from '../types/form';
import { useAppDispatch } from '../redux/hooks';
import { loginThunk } from '../redux/auth-slice';
import { LogInErrorPayload } from '../types/login-payload';

function LogInPage() {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid Email'),
    password: yup.string().required('password is required').min(3, 'password is too short'),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LogInFormInput>({ resolver: yupResolver(schema), mode: 'all' });

  async function onSubmit(data: LogInFormInput) {
    try {
      const res = await dispatch(loginThunk(data)).unwrap();
      toast({
        title: 'Form is submitted',
        description: JSON.stringify(res),
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      navigate('/');
    } catch (e: any | AxiosError<LogInErrorPayload>) {
      toast({
        title: 'Form is submitted',
        description: JSON.stringify(e),
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={errors.email ? true : false}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register('email')} />
                <FormErrorMessage>{errors.email && errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password ? true : false}>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register('password')} />
                <FormErrorMessage>{errors.password && errors.password?.message}</FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}></Stack>
                <Button
                  isLoading={isSubmitting}
                  loadingText={'logging in'}
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
}

export default LogInPage;
