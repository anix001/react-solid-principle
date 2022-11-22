
import { Button } from "./Button";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

export function OCP() {
  return (
    <div className="flex space-x-10">
       {/* open for extension and closed for modification  */}
      <Button
        text="Go Home"
        icon={<HiOutlineArrowNarrowRight />}
      />
      <Button
        text="Go Back"
        icon={<HiOutlineArrowNarrowLeft />}
      />
    </div>
  );
}