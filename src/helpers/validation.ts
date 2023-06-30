import { Rule } from "antd/es/form";

export const required = {
  required: true,
  message: "Поле обязательно для заполнения!",
};

export const email = {
  type: "email",
  message: "Введите корректный email",
} as Rule;

export const min = (value: number) => {
  return {
    min: value,
    message: `Минимальная длина - ${value}`,
  };
};

export const max = (value: number) => {
  return {
    max: value,
    message: `Максимальная длина - ${value}`,
  };
};

export const url = { type: "url", warningOnly: true, message: "Невалидный url" } as Rule;
