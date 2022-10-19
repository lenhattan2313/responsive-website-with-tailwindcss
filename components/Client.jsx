import Image from "next/image";
import React from "react";
import { clients } from "../constants";
import styles from "../constants/styles";

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full gap-5`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter}  max-w-[120px]`}
          >
            <Image src={client.logo} alt="client" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
