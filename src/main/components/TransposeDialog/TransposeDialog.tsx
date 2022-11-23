import { Button, TextField } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { localized } from "../../../common/localize/localizedString"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../../components/Dialog"

export interface TransposeDialogProps {
  open: boolean
  onClickOK: (value: number) => void
  onClose: () => void
}

export const TransposeDialog: FC<TransposeDialogProps> = ({
  open,
  onClickOK,
  onClose,
}) => {
  const [input, setInput] = useState("0")

  // reset on open
  useEffect(() => {
    if (open) {
      setInput("")
    }
  }, [open])

  const _onClickOK = () => {
    const value = parseInt(input)
    onClickOK(isNaN(value) ? 0 : value)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTitle>{localized("transpose", "Transpose")}</DialogTitle>
      <DialogContent>
        <TextField
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus={true}
          placeholder={"0"}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              _onClickOK()
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{localized("close", "Close")}</Button>
        <Button onClick={_onClickOK} color="primary" variant="contained">
          {localized("ok", "OK")}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
