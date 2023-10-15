import SettingSection from "../../../../../components/settingSection/SettingSection";

export default function Settings() {
    return (
        <div>
            <SettingSection text={"Favicon"} link={""} />
            <SettingSection text={"Style Guide"} link={""} />
            <SettingSection text={"Design Tools"} link={"#"} />
            <SettingSection text={"Custom Code"} link={""} />
        </div>
    );
}