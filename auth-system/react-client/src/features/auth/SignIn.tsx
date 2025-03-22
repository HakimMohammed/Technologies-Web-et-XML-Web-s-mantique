import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/layouts/AuthLayout";
import { Label } from "@radix-ui/react-label";
import { AnyFieldApi, useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";

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

export default function SignIn() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("user logging in using :", values.value.email);
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
                return value.includes("error") && 'No "error" allowed in email';
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
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit} className="w-full">
              {isSubmitting ? "Signing in" : "Sign in"}
            </Button>
          )}
        />
        <p className="text-center">
          Don't have an account ?<Link to="/signup"> Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
