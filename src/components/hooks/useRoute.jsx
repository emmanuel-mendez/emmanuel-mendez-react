import { usePathname } from './usePathname'

export const useLang = (link) => {

	if (usePathname().startsWith("/es/")) {
		return `/es/${link}`
	} else {
		return `/${link}`
	}
}