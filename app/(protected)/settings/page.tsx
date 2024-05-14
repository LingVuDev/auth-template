import { auth } from "@/auth";
import { signOut } from "@/auth";
import React from "react";

const SettingsPage = async () => {
  const sesstion = await auth();

  return (
    <div>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
