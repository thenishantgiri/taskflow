"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

/**
 *
 * this function is used to set the active organization in the organization list,
 * if the organizationId is in the url params is different to the active
 * organization in the navbar, and the active organization will be the one entered in url params.
 *
 */

export const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.organizationId as string,
    });
  }, [setActive, params.organizationId]);

  return null;
};
