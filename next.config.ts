import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  output: 'export',
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig
