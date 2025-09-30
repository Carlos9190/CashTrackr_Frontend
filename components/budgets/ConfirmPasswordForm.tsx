import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { DialogTitle } from "@headlessui/react";
import { useFormState } from "react-dom";
import { deleteBudget } from "@/actions/delete-budget-action";
import ErrorMessage from "../ui/ErrorMessage";
import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";

export default function ConfirmPasswordForm() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const budgetId = +searchParams.get("deleteBudgetId")!;

  const closeModal = useCallback(() => {
    const hideModal = new URLSearchParams(searchParams.toString());
    hideModal.delete("deleteBudgetId");
    router.replace(`${pathname}?${hideModal}`);
  }, [searchParams, pathname, router]);

  const deleteBudgetWithPassword = deleteBudget.bind(null, budgetId);
  const [state, dispatch] = useFormState(deleteBudgetWithPassword, {
    errors: [],
    success: "",
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      closeModal();
    }
  }, [state, closeModal]);

  return (
    <div className="md:px-8 lg:px-10 flex flex-col items-center text-center">
      <DialogTitle
        as="h3"
        className="font-black text-3xl sm:text-4xl text-purple-950 my-5"
      >
        Delete Budget
      </DialogTitle>
      <p className="text-lg sm:text-xl font-bold">
        Enter your password to {""}
        <span className="text-amber-500">delete the budget</span>
      </p>
      <p className="text-gray-600 text-sm">
        (A deleted budget and its expenses cannot be recovered)
      </p>

      {state.errors.map((error) => (
        <ErrorMessage key={error}>{error}</ErrorMessage>
      ))}
      <form
        className="mt-14 space-y-5 w-full max-w-md"
        noValidate
        action={dispatch}
      >
        <div className="flex flex-col gap-5">
          <label className="font-bold text-lg sm:text-2xl" htmlFor="password">
            Enter your password to confirm
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-lg"
            name="password"
          />
        </div>
        <div className="flex justify-between gap-2">
          <input
            type="submit"
            value="Delete Budget"
            className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black cursor-pointer transition-colors"
          />
          <button
            className="bg-amber-500 hover:bg-amber-600 w-full p-3 rounded-lg text-white font-black cursor-pointer transition-colors"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
