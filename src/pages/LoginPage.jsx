import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { login, self } from "@/http/api";
import { useAuthStore } from "@/store";

const LoginPage = () => {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  // NOTE: Instead of useState we can use useRef

  const { refetch } = useQuery({
    queryKey: ["self"],
    queryFn: async () => {
      const { data } = await self();
      return data;
    },
    enabled: false,
  });

  //: Create the mutation for login
  const {
    mutate: loginMutate,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: async () => {
      console.log("Login Successfull.");
      const selfData = await refetch();
      // console.log("SelfData: ", selfData);
      setUser(selfData.data);

      navigate("/");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("LoginData: ", loginData);

    //: Make server call for login
    await loginMutate(loginData);
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
              {isPending && <div>Loading...</div>}
              {isError && (
                <div className="text-red-500 text-sm">{error.message}</div>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={loginData.email}
                    placeholder="m@example.com"
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full cursor-pointer"
                  disabled={isPending}
                >
                  {isPending && <LoaderCircle className="animate-spin" />}
                  <span className="ml-2">Login</span>
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  to="/auth/register"
                  className="underline underline-offset-4"
                >
                  Register
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
