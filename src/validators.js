import {HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS} from "@/constants";

export function isPageValid(page) {
    return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
    return isNumber(hour) && between(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function validateSelectOptions(options) {
        return options.every(iSelectOptionValid)
}

function iSelectOptionValid({ value, label }) {
    return isNumber(value) && isString(label)
}

export function validateTimelineItems(timelineItems) {
        return timelineItems.every(isTimelineItemValid)
}

export function isUndefinedOrNull(value) {
    return isNull(value) || isUndefined(value)
}

export function isNumberOrNull(value) {
    return isNumber(value) || isNull(value)
}

export function isNull(value) {
    return value === null
}

export function isUndefined(value) {
    return value === undefined
}

export function isNumber(value) {
    return typeof value === "number"
}

export function isString(value) {
    return typeof value === "string"
}

function between(value, start, end) {
    return value >= start && value <= end
}