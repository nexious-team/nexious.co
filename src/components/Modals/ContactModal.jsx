/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

export default function ContactModal({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 py-8 sm:p-8 sm:pb-8 flex justify-center">
                <div className="w-2/4">
                  <div>
                    <ContactItem
                      icon={"mobile-alt"}
                      iconColor="#2A3B80"
                      text="(+855)16 77 3002"
                    />
                  </div>
                  <div  className="mt-2">
                    <ContactItem
                      icon={"mobile-alt"}
                      iconColor="#2A3B80"
                      text="(+855)95 77 3002"
                    />
                  </div>
                  <div  className="mt-2">
                    <ContactItem
                      icon={"envelope"}
                      iconColor="#2A3B80"
                      text="nexious.team@gmail.com"
                    />
                  </div>
                </div>
                {/* <div className="flex flex-col items-center">
                  <h6>+85516 77 3002</h6>
                  <h6>+85595 77 3002</h6>
                  <h6>nexious.team@gmail.com</h6>
                </div> */}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function ContactItem({ icon, iconColor, text }) {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 text-center border rounded p-1">
        <Icon icon={icon} color={iconColor} size="lg" />
      </div>
      <div className="ml-2">{text}</div>
    </div>
  );
}
