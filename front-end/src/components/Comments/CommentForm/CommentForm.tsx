import React, { useState } from "react";

interface CommentsFormProps {
  btnLabel?: string;
  formSubmitHandler: (comment: string) => void;
  formCancleHandler: any;
  initialText:any;
}

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancleHandler = null,
  initialText="",
}: CommentsFormProps) => {
  // start value state
  const [value, setvalue] = useState(initialText);
  // end value state

  // start submitHandler
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formSubmitHandler(value);
    setvalue("");
  };
  // end submitHandler

  return (
    // start form
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border border-blue-600 rounded-lg p-4">
        {/* start textarea  */}
        <textarea
          className="w-full focus:outline-none bg-transparent"
          rows={5}
          placeholder="Leave your comment here..."
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        {/* end textarea & start button */}
        <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
          {formCancleHandler && <button onClick={formCancleHandler} className="px-6 py-2.5 rounded-lg border border-red-500 text-red-500">
            Cancel</button>}
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold"
          >
            {btnLabel}
          </button>
        </div>
        {/* end button */}
      </div>
    </form>
    // end form
  );
};

export default CommentForm;