import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { FormattedMessage as Text } from "react-intl";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IService {
  title: string;
  icon: IconProp;
  description: string;
}
interface ServiceProps {
  service: IService;
}
export default function Service(props: ServiceProps) {
  const { service } = props;
  const { title, icon, description } = service

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-black flex justify-center items-center">
        <Icon icon={icon} size="lg" className="text-white" />
      </div>
      <h4 className="mt-4 text-lg lg:text-xl">
        <Text id={title} />
      </h4>
      <p className="mt-2 text-center text-sm text-gray-500">
        <Text id={description} />
      </p>
    </div>
  )
}
