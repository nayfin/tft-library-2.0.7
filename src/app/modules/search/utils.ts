export const ALGOLIA_LOGO_URL = 'https://firebasestorage.googleapis.com/v0/b/bigharvest-1046.appspot.com/o/algolia.png?alt=media&token=d2c9f6c4-21f5-49d7-8f79-1206e38aa8bd'

export function bem(widgetName: string) {
  const cx = function(element?: string, subElement?: string) {
    if (element) {
      const scoppedWidgetName = `ais-${widgetName}-${element}`;

      // output `ais-Widget-Header|Body|Footer ais-Header|Body|Footer`
      if (element === 'header' || element === 'body' || element === 'footer') {
        const nonScoppedWidgetName = `ais-${element}`;
        return `${scoppedWidgetName} ${nonScoppedWidgetName}`;
      }

      // output `ais-Widget-Xyz--abc`
      if (subElement) {
        return `${scoppedWidgetName}--${subElement}`;
      }

      // output `ais-Widget-Xyz`
      return scoppedWidgetName;
    } else {
      // output `ais-Widget`
      return `ais-${widgetName}`;
    }
  };
  return cx;
}

export function parseNumberInput(input?: number | string) {
  return typeof input === 'string' ? parseInt(input, 10) : input;
}
