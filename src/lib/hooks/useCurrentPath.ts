import { usePathname } from 'next/navigation';

export default function useCurrentPath() {
  const pathname = usePathname();
  return pathname;
}
