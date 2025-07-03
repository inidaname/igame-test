import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

import { UserContext } from "@/provider";
import { useRouter } from "next/navigation";

import FormField from "../form-field";
import { getSessionToken } from "@/utils/session-manager";

const PickNumberForm: React.FC = () => {
  const [formValue, setFormValue] = useState<string>("");
  const router = useRouter();
  const {
    gameData: { setGameData },
  } = useContext(UserContext);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setFormValue(value);
  };

  useEffect(() => {
    if (formValue.length >= 1) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/games",
        {
          selectedNumber: formValue,
        },
        { headers: { Authorization: `Bearer ${getSessionToken()}` } }
      );

      setGameData(response.data.data);

      router.replace("/result");
      setFormValue("");
    } catch (err: any) {
      console.error(err);
      // setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full flex-1">
      <p>Pick a random number 1-9</p>
      <div className="w-1/4">
        <FormField
          value={formValue}
          maxLength={1}
          name="selectedNumber"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PickNumberForm;
