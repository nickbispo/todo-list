import { SubmitHandler, useForm } from "react-hook-form";
import { PublicLayout } from "../../../layouts/PublicLayout";
import { Link } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <PublicLayout>
      <div className="min-h-screen p-2 flex flex-col gap-7 items-center justify-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-base text-center">
            Bem-vindo de volta ao seu organizador pessoal!
          </h2>
          <p className="text-sm text-center">
            Entre na sua conta e retome o controle da sua vida cotidiana. Organize, planeje e realize tarefas com facilidade.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input {...register('email', {required: 'Campo obrigatório'})}  className={`outline-none border ${errors.email ? 'border-red-600' : 'border'} p-2 rounded-md`}/>
            {errors.email?.type === 'required' && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label>Senha</label>
              <Link to={'/recuperar-senha'} className="text-[#007AFF]">Recuperar senha</Link>
            </div>
            <input {...register('password', {required: 'Campo obrigatório'})}  className={`outline-none border ${errors.password ? 'border-red-600' : 'border'} p-2 rounded-md`}/>
            {errors.password?.type === 'required' && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          <input  type="submit" value={'Login'} disabled={errors.email || errors.password ? true : false}  className={"bg-[#007AFF] p-2 rounded-md text-white font-bold disabled:bg-zinc-400 duration-500"}/>

          <div className="flex gap-2">
            <p>Não tem uma conta?</p>
            <Link to={'/cadastrar'} className="text-[#007AFF]">Criar nova conta</Link>
          </div>
        </form>
      </div>
    </PublicLayout>
  );
};

export default Login;
