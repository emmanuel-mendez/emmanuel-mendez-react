import { usePathname } from './usePathname'

export const useLang = () => {
	if (usePathname().startsWith("/es/")) {
		return true
	}
}