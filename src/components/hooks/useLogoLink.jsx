import { usePathname } from './usePathname'

export const useLogoLink = () => {
	if (usePathname().startsWith("/es/")) {
		return "/es/"
	} else {
		return "/"
	}
}