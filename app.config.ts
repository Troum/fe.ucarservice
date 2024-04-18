export default defineAppConfig({
    ui: {
        strategy: 'override',
        card: {
            background: 'bg-gradient-to-br from-vermilion-50 to-vermilion-200 dark:bg-gradient-to-br dark:from-woodsmoke-600 dark:to-woodsmoke-900',
            divide: 'divide-y divide-woodsmoke-900 dark:divide-vermilion-200',
            ring: 'ring-1 ring-woodsmoke-600 dark:ring-vermilion-200'
        },
        input: {
            placeholder: 'placeholder-woodsmoke-900 dark:placeholder-vermilion-200',
            color: {
                white: {
                    outline: 'shadow-sm bg-transparent dark:bg-transparent text-woodsmoke-900 dark:text-vermilion-200 ring-1 ring-inset ring-woodsmoke-600 dark:ring-vermilion-200 focus:ring-1 focus:ring-woodsmoke-900 dark:focus:ring-vermilion-200'
                }
            }
        },
        divider: {
            border: {
                base: 'flex border-woodsmoke-900 dark:border-vermilion-200',
            }
        },
        button: {
            variant: {
                solid: 'transition-all rounded-full bg-woodsmoke-900 hover:bg-woodsmoke-900/90 disabled:bg-woodsmoke-400 font-light px-6 text-[14px] shadow-sm ring-none text-vermilion-200 dark:text-vermilion-200 dark:bg-woodsmoke-900 dark:hover:bg-woodsmoke-900/90 dark:disabled:bg-woodsmoke-400 focus-visible:ring-none',
                outline: 'transition-all border border-woodsmoke-800 text-[14px] text-woodsmoke-900 hover:bg-transparent dark:hover:bg-transparent dark:border-vermilion-200 dark:text-vermilion-200 px-3 py-2',
                ghost: 'transition-all text-[14px] border-none text-woodsmoke-900 hover:bg-transparent dark:hover:bg-transparent dark:text-vermilion-200 px-3 py-2',
                soft: 'transition-all text-[14px] border-none text-woodsmoke-900 hover:bg-transparent dark:hover:bg-transparent dark:text-vermilion-200 px-3 py-2',
            }
        },
        select: {
            placeholder: 'bg:transparent text-woodsmoke-400 dark:text-vermilion-500',
            variant: {
                outline: 'shadow-sm bg-transparent text-woodsmoke-900 dark:text-vermilion-200 ring-1 ring-inset ring-woodsmoke-600 dark:ring-vermilion-200 focus:ring-1 focus:ring-woodsmoke-5600 dark:focus:ring-vermilion-200'
            },
            color: {
                white: 'shadow-sm bg-transparent text-woodsmoke-900 dark:text-vermilion-200 ring-1 ring-inset ring-woodsmoke-600 dark:ring-vermilion-200 focus:ring-1 focus:ring-woodsmoke-5600 dark:focus:ring-vermilion-200'
            },
            icon: {
                base: 'flex-shrink-0 text-woodsmoke-900 dark:text-vermilion-200'
            }
        },
        selectMenu: {
            background: 'bg-gradient-to-br from-vermilion-50 to-vermilion-200 dark:bg-gradient-to-br dark:from-woodsmoke-600 dark:to-woodsmoke-900',
            ring: 'ring-1 ring-woodsmoke-900 dark:ring-vermilion-200',
            option: {
                active: 'transition-all bg-vermilion-200 dark:bg-vermilion-200 dark:text-woodsmoke-900',
            }
        },
        checkbox: {
            background: 'bg-transparent dark:bg-transparent',
            border: 'border border-woodsmoke-900 dark:border-vermilion-200'
        },
        verticalNavigation: {
            icon: 'text-woodsmoke-900 dark:text-vermilion-200',
            inactive: 'text-woodsmoke-900 dark:text-vermilion-200 relative after:transition-all after:absolute after:bottom-0 after:content-[\'\'] after:block after:w-[0px] after:h-[1px] after:bg-woodsmoke-900 dark:after:bg-vermilion-200 hover:after:w-full',
            active: 'text-woodsmoke-900 dark:text-vermilion-200 bg-transparent dark:bg-transparent relative after:absolute after:bottom-0 after:content-[\'\'] after:block after:h-[1px] after:bg-woodsmoke-900 dark:after:bg-vermilion-200 after:w-full',
        }
    }
})
