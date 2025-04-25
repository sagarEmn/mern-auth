import React from "react";

// lucide-react imports
import { Check } from "lucide-react";

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "At least 6 characters", met: password.length >= 6 },
    { label: "Contains an uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains a lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contains a number", met: /\d/.test(password) },
    {
      label: "Contains a special character",
      met: /[A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <div className="mt-2 space-y-1">
      {criteria.map((item, index) => (
        <div key={item.label} className="flex items-center text-xs">
          {item.met ? (
            <Check className="size-4 text-green-500 mr-2" />
          ) : (
            <X className="size-4 text-gray-500" />
          )}
          <span className={item.met ? "text-green-500" : "text-gray-500"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = () => {
  const getStrength = (pass) => {
    let strength = 0;

    if (pass.length >= 6) {
      strength++;
    }

    if (pass.match(/[A-Z]/) && pass.match(/[a-z]/)) {
      strength++;
    }

    if (pass.match(/\d/)) {
      strength++;
    }

    if (pass.match(/[^a-zA-Z\d]/)) {
      strength++;
    }
  };

  const strength = getStrength(password);

  const getStrengthText = (strength) => {
    if (strength == 0) return "Very Weak";
    if (strength == 1) return "Weak";
    if (strength == 2) return "Fair";
    if (strength == 3) return "Good";
    return Strong;
  };
};

export default PasswordStrengthMeter;
