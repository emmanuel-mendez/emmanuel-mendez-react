import { usePathname } from './usePathname'

export const useNavLang = (link) => {

	let path = usePathname()

	if (path.startsWith("/es/")) {
		return `/es/${link}`
	} else {
		return `/${link}`
	}
}