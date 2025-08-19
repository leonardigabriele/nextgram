import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  deploymentId: "soft",
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
