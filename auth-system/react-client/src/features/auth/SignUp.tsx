import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import AuthLayout from "@/layouts/AuthLayout";
import { AnyFieldApi, useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em role="alert" className="text-destructive">
          {field.state.meta.errors.join(", ")}
        </em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

export default function SignUp() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const {signUp} = useAuth();
  const navigate = useNavigate({from: "/signup"});

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      console.log("user signing up using :", values.value.email);
      try {
        await signUp(values.value.name, values.value.email, values.value.password);
        navigate({to: "/"});
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <AuthLayout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-6"
      >
          <div>
            <form.Field
              name="name"
              validators={{
                onChange: ({ value }) =>
                  !value ? "A name is required" : undefined,
              }}
              children={(field) => {
                return (
                  <div className="flex flex-col gap-3">
                    <Label htmlFor={field.name}>Name</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="John Doe"
                    />
                    <FieldInfo field={field} />
                  </div>
                );
              }}
            />
          </div>
          <div>
            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? "An email is required"
                    : !emailRegex.test(value)
                    ? "Invalid email format"
                    : undefined,
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: async ({ value }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return (
                    value.includes("error") && 'No "error" allowed in email'
                  );
                },
              }}
              children={(field) => {
                return (
                  <div className="flex flex-col gap-3">
                    <Label htmlFor={field.name}>Email</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="john@example.com"
                    />
                    <FieldInfo field={field} />
                  </div>
                );
              }}
            />
          </div>
        <div className="flex gap-4">
          <div>
            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? "A password is required"
                    : value.length < 8
                    ? "Password must be at least 8 characters"
                    : undefined,
              }}
              children={(field) => {
                return (
                  <div className="flex flex-col gap-3">
                    <Label htmlFor={field.name}>Password</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="password"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="********"
                    />
                    <FieldInfo field={field} />
                  </div>
                );
              }}
            />
          </div>
          <div>
            <form.Field
              name="confirmPassword"
              validators={{
                onChange: ({ value, fieldApi }) =>
                  !value
                    ? "A password confirmation is required"
                    : value !== fieldApi.form.getFieldValue("password")
                    ? "Passwords do not match"
                    : undefined,
              }}
              children={(field) => {
                return (
                  <div className="flex flex-col gap-3">
                    <Label htmlFor={field.name}>Confirm Password</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="password"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="********"
                    />
                    <FieldInfo field={field} />
                  </div>
                );
              }}
            />
          </div>
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit} className="w-full">
              {isSubmitting ? "Signing up" : "Sign up"}
            </Button>
          )}
        />
        <p className="text-center">Already have an account ? 
            <Link to="/signin"> Sign in</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
