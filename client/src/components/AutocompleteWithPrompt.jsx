import React, { Component, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import uuid from "react-uuid";

const filter = createFilterOptions();

const AutocompleteWithPrompt = (props) => {
  const options = props.entries.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  // const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      name: "",
      description: "",
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const newEntry = {
      name: dialogValue.name,
      id: uuid(),
      description: dialogValue.description,
    };

    props.handleSubmit(newEntry);

    props.onChange({
      target: {
        name: props.name,
        value: newEntry.name,
        id: newEntry.id
      },
    });

    handleClose();
  };

  const onChangeProps = (newValue, id) => {
    props.onChange({
        target: {
          name: props.name,
          value: newValue,
          id: id
        }
    });
  };

  const onChange = (newValue) => {
      console.log(newValue);
    if (typeof newValue === "string") {
      // timeout to avoid instant validation of the dialog's form.
      setTimeout(() => {
        // onChangeProps(newValue);
        toggleOpen(true);
        setDialogValue({
          name: newValue,
          description: "",
        });
      });
    } else if (newValue && newValue.inputValue) {
        console.log("ghot ehre")
      onChangeProps(newValue.inputValue, "");
      toggleOpen(true);
      setDialogValue({
        name: newValue.inputValue,
        description: "",
      });
    } else if (newValue && newValue.name) {
      onChangeProps(newValue.name, newValue.id);
    }else {
      onChangeProps(newValue, "");
    }
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={props.value}
        name={props.name}
        onChange={(event, newValue) => onChange(newValue)}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.name}
        freeSolo
        size="small"
        renderInput={(params) => (
          <TextField {...params} label={props.entryType} variant="filled" />
        )}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">
            Add a new {props.entryType}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any {props.entryType} in our list? Please, add it!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.name}
              onChange={(event) =>
                setDialogValue({ ...dialogValue, name: event.target.value })
              }
              label="name"
              type="text"
            />
            <TextField
              margin="dense"
              id="name"
              value={dialogValue.description}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  description: event.target.value,
                })
              }
              label="description"
              type="text"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default AutocompleteWithPrompt;
