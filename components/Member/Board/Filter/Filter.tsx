import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import styles from "./Filter.module.scss";

const cx = classNames.bind(styles);

interface CheckBoxFilterProps {
  name: string;
  options: string[];
  selectedOptions: boolean[];
  setSelectedOptions: (options: boolean[]) => void;
}

function CheckBoxFilter({
  name,
  options,
  selectedOptions,
  setSelectedOptions,
}: CheckBoxFilterProps) {
  const [allSelected, setAllSelected] = useState(true);
  function handleClickAllOption(e: React.MouseEvent) {
    e.preventDefault();
    const newSelectedOptions = options.map(() => !allSelected);
    setSelectedOptions(newSelectedOptions);
    setAllSelected(!allSelected);
  }

  function handleClickOption(e: React.MouseEvent<HTMLLIElement>) {
    e.preventDefault();
    const t = e.currentTarget;
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[t.value] = !selectedOptions[t.value];
    setSelectedOptions(newSelectedOptions);
    setAllSelected(
      newSelectedOptions.filter((x) => x).length === options.length,
    );
  }

  return (
    <div className={cx("container", "checkbox")}>
      <label className={cx("filterName")}>{name}</label>
      <ol className={cx("filterList")}>
        <li
          className={cx("filter", allSelected ? "active" : "inactive")}
          onClick={handleClickAllOption}
        >
          <div className={cx("checkbox")}>
            <img
              className={cx("check")}
              alt={"selected"}
              src={"/static/images/check.svg"}
            />
          </div>
          <label className={cx("option")} draggable={false}>
            전체
          </label>
        </li>
        {options.map((c, i) => (
          <li
            key={i}
            value={i}
            className={cx("filter", selectedOptions[i] ? "active" : "inactive")}
            onClick={handleClickOption}
          >
            <div className={cx("checkbox")}>
              <img
                className={cx("check")}
                alt={"selected"}
                src={"/static/images/check.svg"}
              />
            </div>
            <label className={cx("option")} draggable={false}>
              {c}
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
}

interface SelectFilterProps {
  name: string;
  options: string[];
  selectedOption: number;
  setSelectedOption: (options: number) => void;
}

function SelectFilter({
  name,
  options,
  selectedOption,
  setSelectedOption,
}: SelectFilterProps) {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const filterState = filterIsOpen ? "open" : "close";

  function handleClickDocument() {
    setFilterIsOpen(false);
  }

  function handleClickFilter(e: React.MouseEvent) {
    e.stopPropagation();
    setFilterIsOpen(!filterIsOpen);
  }

  function handleClickOption(e: React.MouseEvent<HTMLLIElement>) {
    if (filterIsOpen) {
      const t = e.currentTarget;
      setSelectedOption(t.value);
      setFilterIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickDocument);
    return () => {
      document.removeEventListener("click", handleClickDocument);
    };
  }, []);

  return (
    <div className={cx("container", "select")}>
      <label className={cx("filterName")}>{name}</label>
      <div className={cx("filter")} onClick={handleClickFilter}>
        <div className={cx("option", "selected")}>
          <label>
            {selectedOption === -1 ? "전체" : options[selectedOption]}
          </label>
          <img
            className={cx("arrow")}
            alt={`dropdown is ${filterState}`}
            src={`/static/images/arrow/${
              filterIsOpen ? "up" : "down"
            }_arrow.svg`}
          />
        </div>
        <ol className={cx("dropDown", filterState)}>
          <li className={cx("option")} value={-1} onClick={handleClickOption}>
            <label className={"optionName"}>전체</label>{" "}
          </li>
          {options.map((c, i) => (
            <li
              className={cx("option")}
              key={i}
              value={i}
              onClick={handleClickOption}
            >
              <label className={"optionName"}>{c}</label>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

interface ToggleFilterProps {
  name: string;
  activeLabel: string;
  inactiveLabel: string;
  isActive: boolean;
  setIsActive: (options: boolean) => void;
}

function ToggleFilter({
  name,
  activeLabel,
  inactiveLabel,
  isActive,
  setIsActive,
}: ToggleFilterProps) {
  function handleClickFilter() {
    setIsActive(!isActive);
  }
  return (
    <div className={cx("container", "toggle")}>
      <label className={cx("filterName")}>{name}</label>
      <div
        className={cx("filter", isActive ? "active" : "inactive")}
        onClick={handleClickFilter}
      >
        <div className={cx("slider")} />
        <div className={cx("optionWrapper", "inactive")}>
          <span className={cx("option")}>{inactiveLabel}</span>
        </div>
        <div className={cx("optionWrapper", "active")}>
          <span className={cx("option")}>{activeLabel}</span>
        </div>
      </div>
    </div>
  );
}

export { CheckBoxFilter, SelectFilter, ToggleFilter };
