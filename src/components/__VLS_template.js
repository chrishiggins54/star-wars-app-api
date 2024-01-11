import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './CharacterListView.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'character-container'?: boolean; } &
{ 'character-card'?: boolean; } &
{ 'character-card'?: boolean; } &
{ 'character-card'?: boolean; } &
{ 'character-card'?: boolean; } &
{ 'search-bar'?: boolean; } &
{ 'search-bar'?: boolean; } &
{ 'search-bar'?: boolean; } &
{ 'search-bar'?: boolean; } &
{ 'button-load-more'?: boolean; } &
{ 'button-load-more'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.input;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
__VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_intrinsicElements.strong; __VLS_intrinsicElements.strong; __VLS_intrinsicElements.strong; __VLS_intrinsicElements.strong; __VLS_intrinsicElements.strong; __VLS_intrinsicElements.strong;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("search-bar"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("search-bar"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["input"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, type: ("text"), value: ((__VLS_ctx.searchQuery)), placeholder: ("Search characters"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, type: ("text"), value: ((__VLS_ctx.searchQuery)), placeholder: ("Search characters"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
const __VLS_15 = __VLS_intrinsicElements["button"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
let __VLS_20 = { 'click': __VLS_pickEvent(__VLS_19['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_17>).onClick) };
__VLS_20 = { click: (__VLS_ctx.searchCharacters) };
(__VLS_18.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_21 = __VLS_intrinsicElements["div"];
const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
const __VLS_23 = __VLS_22({ ...{}, class: ("character-container"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> & Record<string, unknown>) => void)({ ...{}, class: ("character-container"), });
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>;
if (__VLS_ctx.character.name) {
for (const [character] of __VLS_getVForSourceType((__VLS_ctx.localCharacters)!)) {
{
const __VLS_26 = __VLS_intrinsicElements["div"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
const __VLS_28 = __VLS_27({ ...{ onClick: {} as any, }, class: ("character-card"), key: ((character.url)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("character-card"), key: ((character.url)), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
let __VLS_31 = { 'click': __VLS_pickEvent(__VLS_30['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_27, typeof __VLS_28>).onClick) };
__VLS_31 = {
click: $event => {
if (!((__VLS_ctx.character.name))) return;
__VLS_ctx.goToCharacterDetail(character);
// @ts-ignore
[searchQuery, searchQuery, searchCharacters, character, localCharacters, goToCharacterDetail,];
}
};
{
const __VLS_32 = __VLS_intrinsicElements["h3"];
const __VLS_33 = __VLS_elementAsFunctionalComponent(__VLS_32);
const __VLS_34 = __VLS_33({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_32, typeof __VLS_34> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34)!;
let __VLS_36!: __VLS_NormalizeEmits<typeof __VLS_35.emit>;
(character.name);
(__VLS_35.slots!).default;
}
{
const __VLS_37 = __VLS_intrinsicElements["p"];
const __VLS_38 = __VLS_elementAsFunctionalComponent(__VLS_37);
const __VLS_39 = __VLS_38({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_37, typeof __VLS_39> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39)!;
let __VLS_41!: __VLS_NormalizeEmits<typeof __VLS_40.emit>;
{
const __VLS_42 = __VLS_intrinsicElements["strong"];
const __VLS_43 = __VLS_elementAsFunctionalComponent(__VLS_42);
const __VLS_44 = __VLS_43({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_42, typeof __VLS_44> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44)!;
let __VLS_46!: __VLS_NormalizeEmits<typeof __VLS_45.emit>;
(__VLS_45.slots!).default;
}
(character.birth_year);
(__VLS_40.slots!).default;
}
{
const __VLS_47 = __VLS_intrinsicElements["p"];
const __VLS_48 = __VLS_elementAsFunctionalComponent(__VLS_47);
const __VLS_49 = __VLS_48({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_47, typeof __VLS_49> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49)!;
let __VLS_51!: __VLS_NormalizeEmits<typeof __VLS_50.emit>;
{
const __VLS_52 = __VLS_intrinsicElements["strong"];
const __VLS_53 = __VLS_elementAsFunctionalComponent(__VLS_52);
const __VLS_54 = __VLS_53({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_52, typeof __VLS_54> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
let __VLS_56!: __VLS_NormalizeEmits<typeof __VLS_55.emit>;
(__VLS_55.slots!).default;
}
(character.height);
(__VLS_50.slots!).default;
}
{
const __VLS_57 = __VLS_intrinsicElements["p"];
const __VLS_58 = __VLS_elementAsFunctionalComponent(__VLS_57);
const __VLS_59 = __VLS_58({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_57, typeof __VLS_59> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59)!;
let __VLS_61!: __VLS_NormalizeEmits<typeof __VLS_60.emit>;
{
const __VLS_62 = __VLS_intrinsicElements["strong"];
const __VLS_63 = __VLS_elementAsFunctionalComponent(__VLS_62);
const __VLS_64 = __VLS_63({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_63));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_62, typeof __VLS_64> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64)!;
let __VLS_66!: __VLS_NormalizeEmits<typeof __VLS_65.emit>;
(__VLS_65.slots!).default;
}
(character.mass);
(__VLS_60.slots!).default;
}
(__VLS_29.slots!).default;
}
}
}
else {
{
const __VLS_67 = __VLS_intrinsicElements["div"];
const __VLS_68 = __VLS_elementAsFunctionalComponent(__VLS_67);
const __VLS_69 = __VLS_68({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_68));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_67, typeof __VLS_69> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69)!;
let __VLS_71!: __VLS_NormalizeEmits<typeof __VLS_70.emit>;
(__VLS_70.slots!).default;
}
}
(__VLS_24.slots!).default;
}
if (__VLS_ctx.nextPage) {
{
const __VLS_72 = __VLS_intrinsicElements["button"];
const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
const __VLS_74 = __VLS_73({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_72, typeof __VLS_74> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
let __VLS_76!: __VLS_NormalizeEmits<typeof __VLS_75.emit>;
let __VLS_77 = { 'click': __VLS_pickEvent(__VLS_76['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_73, typeof __VLS_74>).onClick) };
__VLS_77 = { click: (__VLS_ctx.getNextPage) };
(__VLS_75.slots!).default;
}
// @ts-ignore
[nextPage, getNextPage,];
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["search-bar"];
__VLS_styleScopedClasses["character-container"];
__VLS_styleScopedClasses["character-card"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
