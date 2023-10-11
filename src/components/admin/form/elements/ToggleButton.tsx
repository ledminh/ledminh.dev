import { Switch } from "@headlessui/react";

import classNames from "@/utils/classNames";

const ToggleButton = (props: {
  children: React.ReactNode;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}) => {
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={props.enabled}
        onChange={props.setEnabled}
        className={classNames(
          props.enabled ? "bg-black" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            props.enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3 text-sm">
        {props.children}
      </Switch.Label>
    </Switch.Group>
  );
};

export default ToggleButton;
