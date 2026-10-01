(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/product/product-gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductGallery",
    ()=>ProductGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.mjs [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product/section-heading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const arrowClass = 'absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center bg-white/90 text-neutral-900 transition-colors hover:bg-brand hover:text-white';
function ProductGallery({ images }) {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const active = images[activeIndex];
    const go = (direction)=>setActiveIndex((current)=>(current + direction + images.length) % images.length);
    const openLightbox = ()=>dialogRef.current?.showModal();
    const closeLightbox = ()=>dialogRef.current?.close();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "fotograf-galerisi",
        labelledBy: "fotograf-galerisi-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        id: "fotograf-galerisi-title",
                        eyebrow: "Galeri",
                        title: "Fotoğraf Galerisi"
                    }, void 0, false, {
                        fileName: "[project]/components/product/product-gallery.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-neutral-500",
                        "aria-live": "polite",
                        children: `${activeIndex + 1} / ${images.length}`
                    }, void 0, false, {
                        fileName: "[project]/components/product/product-gallery.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product/product-gallery.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group relative aspect-[16/10] overflow-hidden border border-border bg-surface md:aspect-[16/8]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: active.src,
                                alt: active.alt,
                                fill: true,
                                sizes: "(min-width: 1280px) 1216px, 100vw",
                                className: "object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02] md:p-8"
                            }, active.src, false, {
                                fileName: "[project]/components/product/product-gallery.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openLightbox,
                                "aria-label": `Büyük görüntüle: ${active.alt}`,
                                className: "absolute inset-0 flex cursor-zoom-in items-end justify-end p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2 bg-neutral-900/80 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                            className: "size-3.5",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/product/product-gallery.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        "Büyüt"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/product/product-gallery.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/product/product-gallery.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>go(-1),
                                "aria-label": "Önceki görsel",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(arrowClass, 'left-0'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "size-5",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/product/product-gallery.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/product/product-gallery.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>go(1),
                                "aria-label": "Sonraki görsel",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(arrowClass, 'right-0'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "size-5",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/product/product-gallery.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/product/product-gallery.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product/product-gallery.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-3 flex snap-x gap-3 overflow-x-auto pb-1 [scrollbar-width:thin] md:grid md:grid-cols-5 md:overflow-visible md:pb-0",
                        children: images.map((image, index)=>{
                            const isActive = index === activeIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "w-32 shrink-0 snap-start md:w-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveIndex(index),
                                    "aria-label": `Görsel ${index + 1}: ${image.alt}`,
                                    "aria-current": isActive ? 'true' : undefined,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group/thumb relative block aspect-[4/3] w-full overflow-hidden border-2 bg-surface transition-colors', isActive ? 'border-brand' : 'border-transparent hover:border-neutral-300'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: image.src,
                                            alt: "",
                                            fill: true,
                                            sizes: "(min-width: 768px) 240px, 128px",
                                            className: "object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/components/product/product-gallery.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute inset-0 bg-neutral-900/30 transition-opacity duration-200', isActive ? 'opacity-0' : 'opacity-100 group-hover/thumb:opacity-0')
                                        }, void 0, false, {
                                            fileName: "[project]/components/product/product-gallery.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/product/product-gallery.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this)
                            }, image.src, false, {
                                fileName: "[project]/components/product/product-gallery.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/product/product-gallery.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product/product-gallery.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: dialogRef,
                "aria-label": "Görsel görüntüleyici",
                onKeyDown: (event)=>{
                    if (event.key === 'ArrowRight') go(1);
                    if (event.key === 'ArrowLeft') go(-1);
                },
                className: "m-0 h-dvh max-h-none w-screen max-w-none bg-neutral-950 p-0 text-white backdrop:bg-black/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-sm text-white/80",
                                    "aria-live": "polite",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-3 tabular-nums text-white",
                                            children: `${activeIndex + 1} / ${images.length}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/product/product-gallery.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        active.alt
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/product/product-gallery.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closeLightbox,
                                    "aria-label": "Görüntüleyiciyi kapat",
                                    className: "flex size-10 shrink-0 items-center justify-center text-white/80 transition-colors hover:bg-white/10 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "size-5",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/product/product-gallery.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/product/product-gallery.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/product/product-gallery.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: active.src,
                                    alt: active.alt,
                                    fill: true,
                                    sizes: "100vw",
                                    className: "object-contain p-4 md:p-12"
                                }, active.src, false, {
                                    fileName: "[project]/components/product/product-gallery.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>go(-1),
                                    "aria-label": "Önceki görsel",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(arrowClass, 'left-2 md:left-6'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "size-5",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/product/product-gallery.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/product/product-gallery.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>go(1),
                                    "aria-label": "Sonraki görsel",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(arrowClass, 'right-2 md:right-6'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "size-5",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/product/product-gallery.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/product/product-gallery.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/product/product-gallery.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/product/product-gallery.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/product/product-gallery.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/product/product-gallery.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(ProductGallery, "L0LeeEeFY3m24aht6PMin6wuVjo=");
_c = ProductGallery;
var _c;
__turbopack_context__.k.register(_c, "ProductGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/product/product-section-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductSectionNav",
    ()=>ProductSectionNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ProductSectionNav() {
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productSections"][0].id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductSectionNav.useEffect": ()=>{
            const sections = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productSections"].map({
                "ProductSectionNav.useEffect.sections": (section)=>document.getElementById(section.id)
            }["ProductSectionNav.useEffect.sections"]).filter({
                "ProductSectionNav.useEffect.sections": (node)=>node !== null
            }["ProductSectionNav.useEffect.sections"]);
            const observer = new IntersectionObserver({
                "ProductSectionNav.useEffect": (entries)=>{
                    const visible = entries.filter({
                        "ProductSectionNav.useEffect.visible": (entry)=>entry.isIntersecting
                    }["ProductSectionNav.useEffect.visible"]).sort({
                        "ProductSectionNav.useEffect.visible": (a, b)=>a.boundingClientRect.top - b.boundingClientRect.top
                    }["ProductSectionNav.useEffect.visible"]);
                    if (visible[0]) setActiveId(visible[0].target.id);
                }
            }["ProductSectionNav.useEffect"], {
                rootMargin: '-35% 0px -55% 0px'
            });
            sections.forEach({
                "ProductSectionNav.useEffect": (section)=>observer.observe(section)
            }["ProductSectionNav.useEffect"]);
            return ({
                "ProductSectionNav.useEffect": ()=>observer.disconnect()
            })["ProductSectionNav.useEffect"];
        }
    }["ProductSectionNav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Ürün bölümleri",
        className: "sticky top-16 z-30 border-y border-border bg-white lg:top-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 md:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "-mb-px flex overflow-x-auto [scrollbar-width:none]",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productSections"].map((section)=>{
                    const isActive = activeId === section.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${section.id}`,
                            "aria-current": isActive ? 'location' : undefined,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('block border-b-2 px-4 py-4 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors md:px-5', isActive ? 'border-brand text-brand' : 'border-transparent text-neutral-500 hover:text-neutral-900'),
                            children: section.label
                        }, void 0, false, {
                            fileName: "[project]/components/product/product-section-nav.tsx",
                            lineNumber: 37,
                            columnNumber: 17
                        }, this)
                    }, section.id, false, {
                        fileName: "[project]/components/product/product-section-nav.tsx",
                        lineNumber: 36,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/product/product-section-nav.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/product/product-section-nav.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/product/product-section-nav.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(ProductSectionNav, "sc139Pdd9tzhkr3uPz7+X+k7Lgw=");
_c = ProductSectionNav;
var _c;
__turbopack_context__.k.register(_c, "ProductSectionNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/product/product-video.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductVideo",
    ()=>ProductVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product/section-heading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ProductVideo({ title, poster }) {
    _s();
    const [requested, setRequested] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "video",
        labelledBy: "video-title",
        tone: "dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                id: "video-title",
                tone: "inverse",
                eyebrow: "Video",
                title: "Ürün Videosu",
                description: "Makinenin çalışma prensibini ve kullanımını gösteren tanıtım videosu bu alanda yer alacaktır."
            }, void 0, false, {
                fileName: "[project]/components/product/product-video.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "group relative aspect-video overflow-hidden border border-white/10 bg-neutral-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: poster,
                            alt: "",
                            fill: true,
                            sizes: "(min-width: 1280px) 1216px, 100vw",
                            className: "object-cover opacity-40 transition-transform duration-700 group-hover:scale-[1.02]"
                        }, void 0, false, {
                            fileName: "[project]/components/product/product-video.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setRequested(true),
                            "aria-label": `${title} videosunu oynat`,
                            className: "absolute inset-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex size-16 items-center justify-center rounded-full bg-white text-brand-dark transition-transform duration-300 group-hover:scale-105 md:size-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "ml-1 size-6 fill-current md:size-7",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/product/product-video.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/product/product-video.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/product/product-video.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 border-t border-white/10 bg-neutral-950/70 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-white md:text-base",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/product/product-video.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/60",
                                    "aria-live": "polite",
                                    children: requested ? 'Video yakında yayınlanacaktır.' : 'Süre: —'
                                }, void 0, false, {
                                    fileName: "[project]/components/product/product-video.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/product/product-video.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/product/product-video.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/product/product-video.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/product/product-video.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ProductVideo, "o9jO8MvllMXj+8BiRfhk2CSgp6U=");
_c = ProductVideo;
var _c;
__turbopack_context__.k.register(_c, "ProductVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/product/section-heading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function SectionHeading({ id, eyebrow, title, description, tone = 'default', className }) {
    const inverse = tone === 'inverse';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('max-w-2xl', className),
        children: [
            eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em]', inverse ? 'text-white/60' : 'text-brand'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-px w-8 bg-current",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/product/section-heading.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    eyebrow
                ]
            }, void 0, true, {
                fileName: "[project]/components/product/section-heading.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: id,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-3 text-balance text-2xl font-light tracking-tight md:text-3xl', inverse ? 'text-white' : 'text-neutral-900'),
                children: title
            }, void 0, false, {
                fileName: "[project]/components/product/section-heading.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-4 text-pretty text-[15px] font-light leading-relaxed', inverse ? 'text-white/70' : 'text-neutral-600'),
                children: description
            }, void 0, false, {
                fileName: "[project]/components/product/section-heading.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/product/section-heading.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/action-link.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionLink",
    ()=>ActionLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const variants = {
    primary: 'metal-dark metal-shine border border-black/40 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_1px_2px_rgb(0_0_0/0.25)] hover:text-silver',
    outline: 'border border-neutral-300 bg-white text-neutral-800 hover:border-brand-dark hover:bg-surface hover:text-brand-dark',
    inverse: 'metal-silver metal-shine border border-white/60 text-brand-dark shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_1px_3px_rgb(0_0_0/0.35)] hover:text-black',
    'outline-inverse': 'border border-white/40 text-white hover:border-white hover:bg-white/10'
};
const sizes = {
    sm: 'h-10 px-4 text-[11px]',
    md: 'h-12 px-6 text-xs'
};
function ActionLink({ href, variant = 'primary', size = 'md', icon: Icon, className, children, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-sm font-medium uppercase tracking-[0.1em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand', variants[variant], sizes[size], className),
        ...rest,
        children: [
            children,
            Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "size-4 transition-transform duration-200 group-hover:translate-x-0.5",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/site/action-link.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/action-link.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = ActionLink;
var _c;
__turbopack_context__.k.register(_c, "ActionLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$action$2d$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/action-link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$social$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/social-icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function LanguageSwitch({ tone = 'light' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 text-[11px] font-medium tracking-wider",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                "aria-current": "true",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-1.5 py-0.5', tone === 'light' ? 'text-white' : 'text-brand'),
                children: "TR"
            }, void 0, false, {
                fileName: "[project]/components/site/header.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: tone === 'light' ? 'text-white/30' : 'text-neutral-300',
                children: "/"
            }, void 0, false, {
                fileName: "[project]/components/site/header.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-1.5 py-0.5 transition-colors', tone === 'light' ? 'text-white/60 hover:text-white' : 'text-neutral-500 hover:text-brand'),
                children: "EN"
            }, void 0, false, {
                fileName: "[project]/components/site/header.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/header.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = LanguageSwitch;
function TopBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "metal-carbon hidden border-b border-white/5 text-white/70 md:block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].phones[0].href,
                            className: "flex items-center gap-2 transition-colors hover:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    className: "size-3.5",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/site/header.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].phones[0].label
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site/header.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].email}`,
                            className: "flex items-center gap-2 transition-colors hover:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                    className: "size-3.5",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/site/header.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].email
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site/header.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site/header.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$social$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"], {
                            className: "flex items-center gap-4 [&_a]:transition-colors [&_a:hover]:text-white",
                            iconClassName: "size-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/site/header.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-4 w-px bg-white/20",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/site/header.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageSwitch, {}, void 0, false, {
                            fileName: "[project]/components/site/header.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site/header.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/site/header.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site/header.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c1 = TopBar;
function Dropdown({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "invisible absolute left-0 top-full z-50 min-w-60 translate-y-1 border border-t-2 border-border border-t-brand bg-white py-2 opacity-0 shadow-lg shadow-black/5 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
        children: items.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "group/sub relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: child.href,
                        className: "flex items-center justify-between gap-6 px-5 py-2.5 text-[13px] text-neutral-700 transition-colors hover:bg-surface hover:text-brand",
                        children: [
                            child.label,
                            child.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "size-3.5",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/site/header.tsx",
                                lineNumber: 72,
                                columnNumber: 32
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/header.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    child.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "invisible absolute left-full top-0 -mt-2 min-w-56 border border-border bg-white py-2 opacity-0 shadow-lg shadow-black/5 transition-opacity duration-200 group-focus-within/sub:visible group-focus-within/sub:opacity-100 group-hover/sub:visible group-hover/sub:opacity-100",
                        children: child.children.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: sub.href,
                                    className: "block px-5 py-2.5 text-[13px] text-neutral-700 transition-colors hover:bg-surface hover:text-brand",
                                    children: sub.label
                                }, void 0, false, {
                                    fileName: "[project]/components/site/header.tsx",
                                    lineNumber: 78,
                                    columnNumber: 19
                                }, this)
                            }, sub.label, false, {
                                fileName: "[project]/components/site/header.tsx",
                                lineNumber: 77,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/site/header.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this)
                ]
            }, child.label, true, {
                fileName: "[project]/components/site/header.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/site/header.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c2 = Dropdown;
function DesktopNavItem({ item, activeLabel }) {
    const isActive = item.label === activeLabel;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "group relative h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: item.href,
                "aria-current": isActive ? 'true' : undefined,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex h-full items-center gap-1 px-2.5 text-[12px] font-medium uppercase tracking-[0.1em] transition-colors xl:px-3.5 xl:text-[13px]', isActive ? 'text-brand' : 'text-neutral-700 hover:text-brand'),
                children: [
                    item.label,
                    item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "size-3.5 transition-transform duration-200 group-hover:rotate-180",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/site/header.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute inset-x-2.5 bottom-0 h-0.5 origin-left bg-gradient-to-r from-brand-dark via-steel to-brand-dark transition-transform duration-200 xl:inset-x-3.5', isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')
                    }, void 0, false, {
                        fileName: "[project]/components/site/header.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site/header.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dropdown, {
                items: item.children
            }, void 0, false, {
                fileName: "[project]/components/site/header.tsx",
                lineNumber: 119,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/header.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c3 = DesktopNavItem;
function MobileNav({ onNavigate, activeLabel }) {
    _s();
    const [openItem, setOpenItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        id: "mobil-menu",
        "aria-label": "Mobil menü",
        className: "max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-white lg:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "divide-y divide-border",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainNav"].map((item)=>{
                    const isActive = item.label === activeLabel;
                    const isOpen = openItem === item.label;
                    const labelClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-[13px] font-medium uppercase tracking-[0.1em]', isActive ? 'text-brand' : 'text-neutral-800');
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: item.children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setOpenItem(isOpen ? null : item.label),
                                    "aria-expanded": isOpen,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-center justify-between px-5 py-4 text-left', labelClass),
                                    children: [
                                        item.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4 transition-transform duration-200', isOpen && 'rotate-180'),
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/header.tsx",
                                            lineNumber: 152,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site/header.tsx",
                                    lineNumber: 145,
                                    columnNumber: 19
                                }, this),
                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "border-t border-border bg-surface py-2",
                                    children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: child.href,
                                                onClick: onNavigate,
                                                className: "block px-8 py-2.5 text-sm text-neutral-600 transition-colors hover:text-brand",
                                                children: child.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/site/header.tsx",
                                                lineNumber: 161,
                                                columnNumber: 27
                                            }, this)
                                        }, child.label, false, {
                                            fileName: "[project]/components/site/header.tsx",
                                            lineNumber: 160,
                                            columnNumber: 25
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/site/header.tsx",
                                    lineNumber: 158,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site/header.tsx",
                            lineNumber: 144,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            onClick: onNavigate,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('block px-5 py-4', labelClass),
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/site/header.tsx",
                            lineNumber: 174,
                            columnNumber: 17
                        }, this)
                    }, item.label, false, {
                        fileName: "[project]/components/site/header.tsx",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/site/header.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 border-t border-border bg-surface px-5 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].phones[0].href,
                        className: "flex items-center gap-2 text-sm text-neutral-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                className: "size-4 text-brand",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/site/header.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].phones[0].label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/header.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageSwitch, {
                                tone: "dark"
                            }, void 0, false, {
                                fileName: "[project]/components/site/header.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$social$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"], {
                                className: "flex items-center gap-4 text-brand",
                                iconClassName: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/site/header.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/header.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site/header.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/header.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(MobileNav, "Zmrt7SMlj4FSCEzRBFkAgHFvdlM=");
_c4 = MobileNav;
function Header({ activeLabel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeNavLabel"] }) {
    _s1();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopBar, {}, void 0, false, {
                fileName: "[project]/components/site/header.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 bg-white/95 shadow-[0_1px_0_0_#dcdfe3] backdrop-blur supports-[backdrop-filter]:bg-white/85",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:px-8 lg:h-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                                fileName: "[project]/components/site/header.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Ana menü",
                                className: "hidden h-full lg:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex h-full items-center",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainNav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopNavItem, {
                                            item: item,
                                            activeLabel: activeLabel
                                        }, item.label, false, {
                                            fileName: "[project]/components/site/header.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/site/header.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/site/header.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$action$2d$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionLink"], {
                                        href: "#iletisim",
                                        size: "sm",
                                        className: "hidden sm:inline-flex",
                                        children: "Teklif Al"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/header.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setMobileOpen((open)=>!open),
                                        "aria-expanded": mobileOpen,
                                        "aria-controls": "mobil-menu",
                                        "aria-label": mobileOpen ? 'Menüyü kapat' : 'Menüyü aç',
                                        className: "flex size-10 items-center justify-center rounded-sm border border-border text-neutral-800 transition-colors hover:border-brand hover:text-brand lg:hidden",
                                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "size-5",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/header.tsx",
                                            lineNumber: 224,
                                            columnNumber: 29
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "size-5",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/header.tsx",
                                            lineNumber: 224,
                                            columnNumber: 75
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/header.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site/header.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/header.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "metal-rule h-px",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/site/header.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileNav, {
                        onNavigate: ()=>setMobileOpen(false),
                        activeLabel: activeLabel
                    }, void 0, false, {
                        fileName: "[project]/components/site/header.tsx",
                        lineNumber: 229,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site/header.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/header.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s1(Header, "33pz4tKGxA4/1e2zOoGo8gBQzP0=");
_c5 = Header;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "LanguageSwitch");
__turbopack_context__.k.register(_c1, "TopBar");
__turbopack_context__.k.register(_c2, "Dropdown");
__turbopack_context__.k.register(_c3, "DesktopNavItem");
__turbopack_context__.k.register(_c4, "MobileNav");
__turbopack_context__.k.register(_c5, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "LogoMark",
    ()=>LogoMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const GEAR_PATH = 'M42.88 12.67 L45.10 4.26 L54.90 4.26 L57.12 12.67 L66.18 15.62 L72.92 10.11 L80.85 15.88 L77.70 23.99 L83.30 31.69 L91.98 31.20 L95.01 40.53 L87.70 45.24 L87.70 54.76 L95.01 59.47 L91.98 68.80 L83.30 68.31 L77.70 76.01 L80.85 84.12 L72.92 89.89 L66.18 84.38 L57.12 87.33 L54.90 95.74 L45.10 95.74 L42.88 87.33 L33.82 84.38 L27.08 89.89 L19.15 84.12 L22.30 76.01 L16.70 68.31 L8.02 68.80 L4.99 59.47 L12.30 54.76 L12.30 45.24 L4.99 40.53 L8.02 31.20 L16.70 31.69 L22.30 23.99 L19.15 15.88 L27.08 10.11 L33.82 15.62 Z';
function LogoMark({ className, light = false }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, '');
    const metal = `ot-metal-${id}`;
    const hub = `ot-hub-${id}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 100 100",
        className: className,
        "aria-hidden": "true",
        focusable: "false",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: metal,
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: light ? '#f5f6f8' : '#d9dde3'
                            }, void 0, false, {
                                fileName: "[project]/components/site/logo.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "45%",
                                stopColor: light ? '#b9bfc8' : '#8a929e'
                            }, void 0, false, {
                                fileName: "[project]/components/site/logo.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "55%",
                                stopColor: light ? '#e4e7eb' : '#b4bac4'
                            }, void 0, false, {
                                fileName: "[project]/components/site/logo.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: light ? '#8d95a1' : '#3f4650'
                            }, void 0, false, {
                                fileName: "[project]/components/site/logo.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/logo.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: hub,
                        cx: "35%",
                        cy: "30%",
                        r: "80%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#5d646e"
                            }, void 0, false, {
                                fileName: "[project]/components/site/logo.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#15181b"
                            }, void 0, false, {
                                fileName: "[project]/components/site/logo.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/logo.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site/logo.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `${GEAR_PATH} M50 24 A26 26 0 1 0 50 76 A26 26 0 1 0 50 24 Z`,
                fill: `url(#${metal})`,
                fillRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/components/site/logo.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "50",
                r: "19",
                fill: `url(#${hub})`
            }, void 0, false, {
                fileName: "[project]/components/site/logo.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "50",
                r: "11",
                fill: "none",
                stroke: "#d9dde2",
                strokeWidth: "3.5"
            }, void 0, false, {
                fileName: "[project]/components/site/logo.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "50",
                r: "4",
                fill: "#f2f4f6"
            }, void 0, false, {
                fileName: "[project]/components/site/logo.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/logo.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(LogoMark, "xfMyHNFebGjSN1/YPqrD8z5EdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = LogoMark;
function Logo({ variant = 'default' }) {
    const light = variant === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: "group flex shrink-0 items-center gap-2.5 md:gap-3",
        "aria-label": "Olgun Torna - Anasayfa",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoMark, {
                light: light,
                className: "size-10 shrink-0 transition-transform duration-700 ease-out group-hover:rotate-[36deg] md:size-12"
            }, void 0, false, {
                fileName: "[project]/components/site/logo.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex flex-col leading-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('whitespace-nowrap text-[19px] font-black uppercase tracking-[0.02em] md:text-[25px]', light ? 'text-white' : 'text-brand-dark'),
                        children: [
                            "Olgun ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: light ? 'text-metal-light' : 'text-metal',
                                children: "Torna"
                            }, void 0, false, {
                                fileName: "[project]/components/site/logo.tsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/logo.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-1 whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.16em] md:text-[8.5px] md:tracking-[0.2em]', light ? 'text-white/60' : 'text-neutral-500'),
                        children: "Makina İmalat Sanayi Ltd. Şti."
                    }, void 0, false, {
                        fileName: "[project]/components/site/logo.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site/logo.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/logo.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c1 = Logo;
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoMark");
__turbopack_context__.k.register(_c1, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Reveal({ children, className, delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const node = ref.current;
            if (!node) return;
            const observer = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                }
            }["Reveal.useEffect"], {
                rootMargin: '0px 0px -8% 0px'
            });
            observer.observe(node);
            return ({
                "Reveal.useEffect": ()=>observer.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-visible": visible,
        style: delay ? {
            transitionDelay: `${delay}ms`
        } : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('reveal', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/site/reveal.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Reveal, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
const tones = {
    white: 'bg-white',
    surface: 'metal-surface',
    dark: 'metal-dark text-white'
};
function Section({ id, labelledBy, tone = 'white', className, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        "aria-labelledby": labelledBy,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('scroll-mt-32 py-16 md:py-20 lg:scroll-mt-36', tones[tone], className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 md:px-8",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/site/section.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site/section.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/social-icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialIcons",
    ()=>SocialIcons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function InstagramIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "5"
            }, void 0, false, {
                fileName: "[project]/components/site/social-icons.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/components/site/social-icons.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "6.5",
                r: "1",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/components/site/social-icons.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/social-icons.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = InstagramIcon;
function FacebookIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2a10 10 0 0 0-1.56 19.88V14.9H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.9h-2.34v6.98A10 10 0 0 0 12 2Z"
        }, void 0, false, {
            fileName: "[project]/components/site/social-icons.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site/social-icons.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c1 = FacebookIcon;
function YoutubeIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z"
        }, void 0, false, {
            fileName: "[project]/components/site/social-icons.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site/social-icons.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c2 = YoutubeIcon;
function LinkedinIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V21h-4V9.75Z"
        }, void 0, false, {
            fileName: "[project]/components/site/social-icons.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site/social-icons.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c3 = LinkedinIcon;
const socials = [
    {
        label: 'Instagram',
        href: '#',
        Icon: InstagramIcon
    },
    {
        label: 'Facebook',
        href: '#',
        Icon: FacebookIcon
    },
    {
        label: 'YouTube',
        href: '#',
        Icon: YoutubeIcon
    },
    {
        label: 'LinkedIn',
        href: '#',
        Icon: LinkedinIcon
    }
];
function SocialIcons({ className, iconClassName = 'size-3.5' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: className,
        children: socials.map(({ label, href, Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: href,
                    "aria-label": label,
                    className: "flex items-center justify-center transition-opacity hover:opacity-70",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: iconClassName
                    }, void 0, false, {
                        fileName: "[project]/components/site/social-icons.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/site/social-icons.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, label, false, {
                fileName: "[project]/components/site/social-icons.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/site/social-icons.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c4 = SocialIcons;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "InstagramIcon");
__turbopack_context__.k.register(_c1, "FacebookIcon");
__turbopack_context__.k.register(_c2, "YoutubeIcon");
__turbopack_context__.k.register(_c3, "LinkedinIcon");
__turbopack_context__.k.register(_c4, "SocialIcons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/site-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activeNavLabel",
    ()=>activeNavLabel,
    "breadcrumbs",
    ()=>breadcrumbs,
    "catalogs",
    ()=>catalogs,
    "companyLinks",
    ()=>companyLinks,
    "contactInfo",
    ()=>contactInfo,
    "descriptionSections",
    ()=>descriptionSections,
    "features",
    ()=>features,
    "galleryImages",
    ()=>galleryImages,
    "machineCategories",
    ()=>machineCategories,
    "machineProducts",
    ()=>machineProducts,
    "mainNav",
    ()=>mainNav,
    "overview",
    ()=>overview,
    "product",
    ()=>product,
    "productCategories",
    ()=>productCategories,
    "productSections",
    ()=>productSections,
    "quoteHref",
    ()=>quoteHref,
    "references",
    ()=>references,
    "relatedProducts",
    ()=>relatedProducts,
    "serviceLinks",
    ()=>serviceLinks,
    "technicalSpecs",
    ()=>technicalSpecs,
    "usageAreas",
    ()=>usageAreas,
    "video",
    ()=>video
]);
const machineCategories = [
    {
        label: 'Hidrolik Presler',
        href: '#'
    },
    {
        label: 'Kenar Bantlama',
        href: '#'
    },
    {
        label: 'Ebatlama',
        href: '#'
    },
    {
        label: 'Zımparalama',
        href: '#'
    }
];
const productCategories = [
    {
        label: 'Özel Makineler ve Projeler',
        href: '#'
    },
    {
        label: 'Robotik ve Otomasyon',
        href: '#'
    },
    {
        label: 'Makineler',
        href: '#',
        children: machineCategories
    },
    {
        label: 'Comau',
        href: '#'
    },
    {
        label: 'Kampanyalı Ürünler',
        href: '#'
    }
];
const serviceLinks = [
    {
        label: 'Kurulum ve Devreye Alma',
        href: '#'
    },
    {
        label: 'Teknik Servis',
        href: '#'
    },
    {
        label: 'Yedek Parça',
        href: '#'
    },
    {
        label: 'Eğitim',
        href: '#'
    }
];
const companyLinks = [
    {
        label: 'Hakkımızda',
        href: '#'
    },
    {
        label: 'Haberler',
        href: '#'
    },
    {
        label: 'Comau',
        href: '#'
    },
    {
        label: 'İletişim',
        href: '#iletisim'
    }
];
const mainNav = [
    {
        label: 'Anasayfa',
        href: '/'
    },
    {
        label: 'Hakkımızda',
        href: '/hakkimizda'
    },
    {
        label: 'Ürünlerimiz',
        href: '/urunlerimiz'
    },
    {
        label: 'Hizmetler',
        href: '#',
        children: serviceLinks
    },
    {
        label: 'Referanslar',
        href: '/referanslar'
    },
    {
        label: 'İletişim',
        href: '#iletisim'
    }
];
const activeNavLabel = 'Ürünlerimiz';
const breadcrumbs = [
    {
        label: 'Ana Sayfa',
        href: '/'
    },
    {
        label: 'Ürünlerimiz',
        href: '#'
    },
    {
        label: 'Makineler',
        href: '#'
    },
    {
        label: 'Hidrolik Presler',
        href: '#'
    },
    {
        label: 'Vakum Membran Presi',
        href: '#'
    }
];
const contactInfo = {
    address: 'Ova Mah. 44346. Sokak No:3/C Seyhan/Adana',
    phones: [
        {
            label: '(0322) 429 00 25',
            href: 'tel:+903224290025'
        },
        {
            label: '(0322) 429 35 92',
            href: 'tel:+903224293592'
        }
    ],
    email: 'info@olguntorna.com.tr'
};
const quoteHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent('Vakum Membran Presi - Teklif Talebi')}`;
const machineProducts = [
    {
        slug: 'krom-konsantre-tesisi',
        kind: 'krom',
        name: 'Krom Konsantre Tesisi Makineleri',
        summary: 'Krom cevherinin zenginleştirilmesi için sallantılı masa, spiral ve yardımcı ekipmanlardan oluşan, tesise özel tasarlanan makine grupları.',
        features: [
            'Tesise özel proje ve imalat',
            'Sallantılı masa ve spiral sistemleri',
            'Montaj ve devreye alma'
        ]
    },
    {
        slug: 'degirmenler',
        kind: 'degirmen',
        name: 'Değirmenler',
        summary: 'Cevher öğütme işlemleri için ağır hizmet tipi bilyalı ve çubuklu değirmenler; yüksek verim ve uzun ömür için sağlam gövde yapısı.',
        features: [
            'Bilyalı / çubuklu tip',
            'Aşınmaya dayanıklı astar',
            'İsteğe göre kapasite'
        ]
    },
    {
        slug: 'kiricilar',
        kind: 'kirici',
        name: 'Kırıcılar',
        summary: 'Birincil ve ikincil kırma kademeleri için çeneli ve darbeli kırıcılar; sert cevherlerde yüksek kırma oranı.',
        features: [
            'Çeneli ve darbeli modeller',
            'Değiştirilebilir aşınma parçaları',
            'Kolay bakım'
        ]
    },
    {
        slug: 'elekler',
        kind: 'elek',
        name: 'Elekler',
        summary: 'Malzemenin boyutlarına göre sınıflandırılması için tek ve çok katlı titreşimli elekler.',
        features: [
            'Tek / çok katlı tabla',
            'Farklı göz açıklıkları',
            'Titreşim izolasyonlu yaylar'
        ]
    },
    {
        slug: 'konveyor-bantlar',
        kind: 'konveyor',
        name: 'Konveyör Bantlar',
        summary: 'Tesis içi malzeme taşıma için istenen uzunluk, genişlik ve eğimde imal edilen bantlı konveyör sistemleri.',
        features: [
            'İstenen ölçüde imalat',
            'Sabit ve hareketli tipler',
            'Tahrik ve gerdirme üniteleri'
        ]
    },
    {
        slug: 'konveyor-bant-makarasi',
        kind: 'makara',
        name: 'Konveyör Bant Makarası',
        summary: 'Konveyör bantlar için taşıyıcı, dönüş ve darbe makaraları; yedek parça olarak imalatı yapılır.',
        features: [
            'Yedek parça imalatı',
            'Taşıyıcı / dönüş / darbe makarası',
            'Sızdırmaz rulman yatakları'
        ]
    }
];
const references = [
    {
        name: 'Dedeman',
        suffix: 'Madencilik'
    },
    {
        name: 'Global',
        suffix: 'Madencilik'
    },
    {
        name: 'Gümüştaş',
        suffix: 'Madencilik A.Ş.'
    },
    {
        name: 'CVK Group',
        suffix: 'Madencilik'
    },
    {
        name: 'Akmetal',
        suffix: 'Madencilik'
    },
    {
        name: 'Pozitif',
        suffix: 'Maden'
    },
    {
        name: 'Ergün',
        suffix: 'Madencilik'
    },
    {
        name: 'Gün',
        suffix: 'Madencilik'
    },
    {
        name: 'Plamako',
        suffix: 'Madencilik'
    },
    {
        name: 'Plakrom',
        suffix: 'Madencilik'
    },
    {
        name: 'Mar-Me',
        suffix: 'Madencilik'
    },
    {
        name: 'Adana',
        suffix: 'Madencilik'
    },
    {
        name: 'Nacioğulları',
        suffix: 'Madencilik'
    },
    {
        name: 'Koyuncu',
        suffix: 'Madencilik'
    },
    {
        name: 'Şanlı',
        suffix: 'Madencilik'
    },
    {
        name: 'Salda Krom',
        suffix: 'Madencilik'
    },
    {
        name: 'Aksu',
        suffix: 'Madencilik'
    }
];
const productSections = [
    {
        id: 'genel-bakis',
        label: 'Genel Bakış'
    },
    {
        id: 'teknik-ozellikler',
        label: 'Teknik Özellikler'
    },
    {
        id: 'urun-aciklamasi',
        label: 'Ürün Açıklaması'
    },
    {
        id: 'fotograf-galerisi',
        label: 'Galeri'
    },
    {
        id: 'video',
        label: 'Video'
    },
    {
        id: 'kataloglar',
        label: 'Kataloglar'
    }
];
const product = {
    title: 'Vakum Membran Presi',
    category: 'Hidrolik Presler',
    summary: 'Termoplastik folyo ve ağaç kaplamaların oymalı veya düz yüzeyli panellere yapıştırılması için geliştirilmiş, PLC kontrollü çok fonksiyonlu pres.',
    catalogHref: '#kataloglar',
    facts: [
        {
            label: 'Kategori',
            value: 'Hidrolik Presler'
        },
        {
            label: 'Çalışma Modu',
            value: 'Vakum / Membran / Vakum-Membran'
        },
        {
            label: 'Kontrol Sistemi',
            value: 'PLC + Dokunmatik Ekran'
        },
        {
            label: 'Tepsi Yapısı',
            value: 'Tek (istek üzerine çift)'
        }
    ]
};
const overview = [
    'Termoplastik folyo ve ağaç kaplamaların oymalı veya düz yüzeyli panellere yapıştırılmasını gerçekleştirir. Vakum, membran ve vakum-membran pres olarak farklı fonksiyonlarda çalıştırılabilir.',
    'Standart olarak tek, istek üzerine çift tepsili olarak üretilir. Tepsi hareketleri el ile yapılır; baskı sırasındaki işletim döngüsü otomatik olarak gerçekleşir.'
];
const features = [
    'Vakum, membran ve vakum-membran çalışma modları',
    'Çok fonksiyonlu PLC ile otomatik işletim döngüsü',
    'Hafızaya alınabilen çalışma programları',
    'Dokunmatik ekran ile kolay kullanım',
    'Membranlı / membransız çalışma seçimi için tek tuş',
    'Gerektiğinde takılıp çıkarılabilen kauçuk-silikon membran'
];
const usageAreas = [
    'Mobilya kapakları',
    'Oymalı paneller',
    'Düz yüzeyli paneller',
    'Mat PVC folyo kaplama',
    'Doğal ağaç kaplama'
];
const technicalSpecs = [
    {
        label: 'Model',
        value: '—'
    },
    {
        label: 'Çalışma Alanı',
        value: 'Bilgi için iletişime geçiniz'
    },
    {
        label: 'Presleme Gücü',
        value: 'Bilgi için iletişime geçiniz'
    },
    {
        label: 'Maksimum Çalışma Basıncı',
        value: 'Bilgi için iletişime geçiniz'
    },
    {
        label: 'Elektrik Gücü',
        value: 'Bilgi için iletişime geçiniz'
    },
    {
        label: 'Ölçüler (G x U x Y)',
        value: '—'
    },
    {
        label: 'Ağırlık',
        value: '—'
    },
    {
        label: 'Kontrol Sistemi',
        value: 'PLC + Dokunmatik Ekran'
    }
];
const descriptionSections = [
    {
        id: 'aciklama-urun-hakkinda',
        title: 'Ürün Hakkında',
        paragraphs: [
            'Bu makine standart olarak tek, istek üzerine çift tepsili olarak üretilmektedir. Tepsi hareketleri el ile yapılır; baskı sırasındaki işletim döngüsü ise otomatik olarak gerçekleşir.',
            'Mat PVC folyo ve doğal ağaç kaplama kapak işleri için tasarlanan bu modelde, üst plakada bulunan kauçuk-silikon membran gerektiğinde takılıp çıkarılabilir.',
            'Yardımcı hava bölmesi sayesinde membranlı ve membransız çalışmalar arasındaki geçiş, makine üzerindeki tek bir tuş ile yapılabilir.'
        ]
    },
    {
        id: 'aciklama-teknik-ozellikler',
        title: 'Teknik Özellikler',
        paragraphs: [
            'Çalışma alanı, presleme gücü, çalışma basıncı ve elektrik gücü gibi teknik değerler model ve opsiyonel donanımlara göre farklılık gösterir.',
            'Güncel teknik veriler için teknik özellikler tablosunu inceleyebilir veya satış ekibimizden ürün kataloğunu talep edebilirsiniz.'
        ]
    },
    {
        id: 'aciklama-kullanim-alanlari',
        title: 'Kullanım Alanları',
        paragraphs: [
            'Vakum membran presi, mobilya ve dekorasyon sektöründe panel yüzeylerinin folyo veya ağaç kaplama ile kaplanması amacıyla kullanılır.'
        ],
        list: usageAreas
    },
    {
        id: 'aciklama-avantajlar',
        title: 'Avantajlar',
        paragraphs: [
            'Uygulama örnekleri ve detaylı avantaj bilgileri bu alana eklenecektir.'
        ],
        list: [
            'Tek makinede üç farklı çalışma modu',
            'Tek tuşla membranlı / membransız geçiş',
            'Hafızaya alınan programlarla tekrarlanabilir üretim',
            'Kolay takılıp çıkarılabilen membran yapısı'
        ]
    }
];
const galleryImages = [
    {
        src: '/images/press-main.png',
        alt: 'Vakum Membran Presi genel görünüm'
    },
    {
        src: '/images/gallery-1.png',
        alt: 'Isıtma plakası ve silikon membran detayı'
    },
    {
        src: '/images/gallery-2.png',
        alt: 'Dokunmatik ekranlı PLC kontrol paneli'
    },
    {
        src: '/images/gallery-3.png',
        alt: 'Üretim ortamında vakum membran presi'
    },
    {
        src: '/images/hero-bg.png',
        alt: 'Üretim tesisi görünümü'
    }
];
const video = {
    title: 'Vakum Membran Presi - Tanıtım Videosu',
    poster: '/images/gallery-3.png'
};
const catalogs = [
    {
        title: 'Vakum Membran Presi Ürün Kataloğu',
        format: 'PDF',
        size: '—',
        href: '#'
    },
    {
        title: 'Teknik Veri Föyü',
        format: 'PDF',
        size: '—',
        href: '#'
    }
];
const relatedProducts = [
    {
        name: 'Çok Katlı Sıcak Pres',
        image: '/images/product-hot-press.png',
        href: '#'
    },
    {
        name: 'Hidrolik Soğuk Pres',
        image: '/images/product-cold-press.png',
        href: '#'
    },
    {
        name: 'Çift Tepsili Membran Pres',
        image: '/images/product-membrane-double.png',
        href: '#'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0vwyiq4._.js.map