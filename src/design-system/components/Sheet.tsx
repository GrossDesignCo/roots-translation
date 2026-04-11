'use client';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ReactNode, useRef, useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './Sheet.module.css';
import { Button } from '../components/Button';
import { X } from '@phosphor-icons/react';

interface SheetProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
  className?: string;
  title: string;
  expanded?: boolean;
  maxWidth?: string;
  position?: 'bottom' | 'right';
  pushContent?: boolean;
  borderless?: boolean;
}

export function Sheet({
  open,
  onOpenChange,
  children,
  className,
  title,
  expanded: initialExpanded = false,
}: SheetProps) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting local UI state when sheet closes
      setExpanded(initialExpanded);
    }
  }, [open, initialExpanded]);

  // Toggle expanded state when handle is clicked
  const handleToggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <DialogPrimitive.Root
      open={open}
      // onOpenChange={(newOpen: boolean) => {
      //   console.log("onOpenChange", newOpen);
      //   onOpenChange?.(newOpen);
      // }}
      modal={false}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content
          className={cx(
            styles.content,
            {
              [styles.open]: open,
              [styles.expanded]: expanded,
            },
            className,
          )}
          ref={contentRef}
        >
          <div className={styles.handle} onClick={handleToggleExpanded}>
            <div className={styles.handleBar} />

            <DialogPrimitive.Title className={styles.title}>
              {title}
            </DialogPrimitive.Title>

            <DialogPrimitive.Close asChild>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Close dialog"
                className={styles.closeButton}
                onClick={() => onOpenChange?.(false)}
              >
                <X size={20} weight="regular" />
              </Button>
            </DialogPrimitive.Close>
          </div>

          <div className={styles.sheetContent}>{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;
export const SheetClose = DialogPrimitive.Close;
