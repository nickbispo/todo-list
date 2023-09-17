import { SubmitHandler, useForm } from "react-hook-form";
import { PublicLayout } from "../../../layouts/PublicLayout";
import { Link } from "react-router-dom";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {name, email, password} = data;

    console.log(name, email, password);
  };

  return (
    <PublicLayout>
      <div className="min-h-screen p-2 flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label>Nome</label>
            <input {...register('name', {required: 'Campo obrigatório'})}  className={`outline-none border ${errors.name ? 'border-red-600' : 'border'} p-2 rounded-md`}/>
            {errors.name?.type === 'required' && <p className="text-red-600">{errors.name.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input {...register('email', {required: 'Campo obrigatório'})}  className={`outline-none border ${errors.email ? 'border-red-600' : 'border'} p-2 rounded-md`}/>
            {errors.email?.type === 'required' && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label>Senha</label>
            <input {...register('password', {required: 'Campo obrigatório'})}  className={`outline-none border ${errors.password ? 'border-red-600' : 'border'} p-2 rounded-md`}/>
            {errors.password?.type === 'required' && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          <input  type="submit" value={'Cadastrar'} disabled={errors.email || errors.password || errors.name ? true : false}  className={"bg-[#007AFF] p-2 rounded-md text-white font-bold disabled:bg-zinc-400 duration-500"}/>

          <div className="flex gap-2">
            <p>Já tem uma conta?</p>
            <Link to={'/login'} className="text-[#007AFF]">Fazer login</Link>
          </div>
        </form>
      </div>
    </PublicLayout>
  );
};

export default Register;
