import React from "react";
import ProfileForm from "./ProfileForm";
import WriterSwitch from "./WriterSwitch";
import { WriterDetailsForm } from "./WriterDetailsForm";

export default function AccountSettings() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-2 md:gap-8 md:p-2">
      <div className="grid gap-4 justify-items-center md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
        <section>
            <ProfileForm />
            <WriterSwitch />
        </section>
        <section>
            <WriterDetailsForm />
        </section>
      </div>
    </main>
  );
}
